"""
Matheus Sousa Portfolio v2 — Multi-State Swiss-Industrial & Live 3D Core Playwright Auditor
Serves the real Flask app (or fallback Jinja2-rendered static server if a Flask dep is absent),
captures 12 views & interactive states across Desktop 1440x900 and Mobile 390x844,
verifies live 3D golden neural core rendering + real frame animation delta,
verifies zero Bosch / Gods Eye View leaks, zero purple/violet violations (HSV 250-330),
zero console errors, zero broken images, and 0px horizontal overflow.
"""

import colorsys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import py_compile
import re
import sys
import threading
from playwright.sync_api import sync_playwright

ROOT = Path(r"C:\Users\stdma\projetos\Portfolio-V1")
SHOTS = ROOT / "screenshots_audit"
SHOTS.mkdir(parents=True, exist_ok=True)


def start_server():
    """Prefer booting the real Flask app; fallback to static server with rendered Jinja2."""
    sys.path.insert(0, str(ROOT))
    try:
        import app as portfolio_app
        from werkzeug.serving import make_server

        srv = make_server("127.0.0.1", 0, portfolio_app.app)
        port = srv.server_port
        t = threading.Thread(target=srv.serve_forever, daemon=True)
        t.start()
        return srv, f"http://127.0.0.1:{port}/", "flask_real"
    except Exception as exc:
        print(f"[INFO] Real Flask boot fallback ({exc}); rendering Jinja2 template statically.")
        html = (ROOT / "templates" / "index.html").read_text(encoding="utf-8")
        html = re.sub(
            r"\{\{\s*url_for\(['\"]static['\"],\s*filename=['\"]([^'\"]*)['\"]\)\s*\}\}",
            lambda m: f"/static/{m.group(1)}",
            html,
        )
        preview = ROOT / "_audit_preview.html"
        preview.write_text(html, encoding="utf-8")

        class Quiet(SimpleHTTPRequestHandler):
            def log_message(self, fmt, *args):
                pass

        srv = ThreadingHTTPServer(("127.0.0.1", 0), partial(Quiet, directory=str(ROOT)))
        port = srv.server_address[1]
        t = threading.Thread(target=srv.serve_forever, daemon=True)
        t.start()
        return srv, f"http://127.0.0.1:{port}/_audit_preview.html", "static_rendered"


def check_page_health(page, label: str) -> dict:
    return page.evaluate(
        """(label) => {
            const imgs = Array.from(document.querySelectorAll('img')).filter(i => i.offsetParent !== null || i.getAttribute('src'));
            const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
            const bodyText = (document.body.innerText || '').toLowerCase();
            const forbiddenHits = ['bosch', 'gods-eye', 'gods eye', "god's eye", 'eva robot'].filter(k => bodyText.includes(k));
            return {
                label,
                innerWidth: window.innerWidth,
                scrollWidth: document.documentElement.scrollWidth,
                overflowX: document.documentElement.scrollWidth - window.innerWidth,
                totalImgs: imgs.length,
                brokenImgs: broken,
                forbiddenHits,
            };
        }""",
        label,
    )


def sample_core_canvas(page) -> dict:
    """Measure luminous golden pixels in #thsyrLiveCore and sample pixel signature."""
    return page.evaluate(
        """() => {
            const c = document.getElementById('thsyrLiveCore');
            if (!c) return { ok: false, reason: 'missing canvas' };
            const ctx = c.getContext('2d');
            const w = c.width, h = c.height;
            const data = ctx.getImageData(0, 0, w, h).data;
            let goldPixels = 0;
            let brightPixels = 0;
            let hash = 0;
            const step = 4 * 16;
            for (let i = 0; i < data.length; i += step) {
                const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
                if (a > 30 && r > 120 && g > 70 && r > b * 1.35) goldPixels++;
                if (a > 80 && r > 200 && g > 140) brightPixels++;
                hash = (hash * 31 + r + g * 3 + b * 7) % 1000000007;
            }
            return { ok: goldPixels > 200, width: w, height: h, goldPixels, brightPixels, hash };
        }"""
    )


def check_header_polarity(page) -> dict:
    return page.evaluate(
        """() => {
            const h = document.getElementById('siteHeader');
            const active = document.querySelector('.rail-link.is-active');
            return {
                isLight: h.classList.contains('is-light'),
                top: Math.round(h.getBoundingClientRect().top),
                activeSection: active ? active.dataset.section : null
            };
        }"""
    )


def main():
    # Clean old stale audit shots
    for old_png in SHOTS.glob("*.png"):
        old_png.unlink()

    # Compile-check Flask entry point
    py_compile.compile(str(ROOT / "app.py"), doraise=True)
    print("PY_COMPILE app.py: OK")

    srv, url, mode = start_server()
    console_errors = []
    page_errors = []

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            # ================= DESKTOP 1440x900 =================
            ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=2)
            page = ctx.new_page()
            page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
            page.on("pageerror", lambda e: page_errors.append(str(e)))

            page.goto(url, wait_until="networkidle")
            page.wait_for_timeout(1200)
            core_t1 = sample_core_canvas(page)
            page.screenshot(path=str(SHOTS / "01_desktop_hero_live_core.png"))
            hero_header = check_header_polarity(page)

            # Wait 450ms and verify real animation frame delta
            page.wait_for_timeout(450)
            core_t2 = sample_core_canvas(page)
            anim_moved = core_t1.get("hash") != core_t2.get("hash")

            # Click Frontal lobe filter -> verify kinetic focus & readout update
            page.locator('[data-core-lobe="frontal"]').click()
            page.wait_for_timeout(550)
            page.screenshot(path=str(SHOTS / "02_desktop_hero_lobe_frontal.png"))
            page.locator('[data-core-lobe="all"]').click()
            page.wait_for_timeout(200)

            # Act 2: #01 ThSyr Flagship
            page.evaluate("document.getElementById('thsyr').scrollIntoView({block:'start', behavior:'instant'})")
            page.wait_for_timeout(450)
            thsyr_header = check_header_polarity(page)
            page.screenshot(path=str(SHOTS / "03_desktop_thsyr_flagship.png"))

            # Act 3: Complexity Matrix (#02 TokLang default + #03 Atlas click)
            page.evaluate("document.getElementById('complexidade').scrollIntoView({block:'start', behavior:'instant'})")
            page.wait_for_timeout(450)
            cx_header = check_header_polarity(page)
            page.screenshot(path=str(SHOTS / "04_desktop_complexity_toklang.png"))

            page.locator('[data-cx="atlas"]').click()
            page.wait_for_timeout(350)
            page.screenshot(path=str(SHOTS / "05_desktop_complexity_atlas.png"))

            # Act 4: TokLang 3-stage live compiler workbench
            page.evaluate("document.getElementById('toklang-lab').scrollIntoView({block:'start', behavior:'instant'})")
            page.wait_for_timeout(450)
            lab_header = check_header_polarity(page)
            page.screenshot(path=str(SHOTS / "06_desktop_toklang_workbench.png"))

            # Act 5A: Story / Industrial Genesis
            page.evaluate("document.getElementById('trajetoria').scrollIntoView({block:'start', behavior:'instant'})")
            page.wait_for_timeout(450)
            story_header = check_header_polarity(page)
            page.screenshot(path=str(SHOTS / "07_desktop_story.png"))

            # Act 5B: Full Filterable Index
            page.evaluate("document.getElementById('indice').scrollIntoView({block:'start', behavior:'instant'})")
            page.wait_for_timeout(450)
            index_header = check_header_polarity(page)
            page.screenshot(path=str(SHOTS / "08_desktop_index.png"))

            # Act 6: Stark Contact Finale
            page.evaluate("window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'instant'})")
            page.wait_for_timeout(450)
            contact_header = check_header_polarity(page)
            page.screenshot(path=str(SHOTS / "09_desktop_contact.png"))

            desktop_health = check_page_health(page, "desktop_1440")
            ctx.close()

            # ================= MOBILE 390x844 =================
            mctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, is_mobile=True)
            mpage = mctx.new_page()
            mpage.on("console", lambda m: console_errors.append("[MOB] " + m.text) if m.type == "error" else None)
            mpage.on("pageerror", lambda e: page_errors.append("[MOB] " + str(e)))

            mpage.goto(url, wait_until="networkidle")
            mpage.wait_for_timeout(1200)
            mpage.screenshot(path=str(SHOTS / "10_mobile_hero_core.png"))

            mpage.evaluate("document.getElementById('coreStage').scrollIntoView({block:'center', behavior:'instant'})")
            mpage.wait_for_timeout(550)
            mpage.screenshot(path=str(SHOTS / "10b_mobile_core_canvas.png"))

            mpage.evaluate("document.getElementById('complexidade').scrollIntoView({block:'start', behavior:'instant'})")
            mpage.wait_for_timeout(450)
            mob_cx_header = check_header_polarity(mpage)
            mpage.screenshot(path=str(SHOTS / "11_mobile_complexity.png"))

            mpage.evaluate("document.getElementById('toklang-lab').scrollIntoView({block:'start', behavior:'instant'})")
            mpage.wait_for_timeout(450)
            mob_lab_header = check_header_polarity(mpage)
            mpage.screenshot(path=str(SHOTS / "12_mobile_workbench.png"))

            mobile_health = check_page_health(mpage, "mobile_390")
            mctx.close()
            browser.close()

        print("SERVER MODE:", mode)
        print("LIVE 3D CORE T1:", core_t1)
        print("LIVE 3D CORE ANIMATED:", anim_moved)
        print(
            "HEADER POLARITY:",
            {
                "hero": hero_header,
                "thsyr": thsyr_header,
                "complexidade": cx_header,
                "toklang_lab": lab_header,
                "trajetoria": story_header,
                "indice": index_header,
                "contato": contact_header,
                "mob_cx": mob_cx_header,
                "mob_lab": mob_lab_header,
            },
        )
        print("DESKTOP HEALTH:", desktop_health)
        print("MOBILE HEALTH:", mobile_health)
        print("CONSOLE ERRORS:", console_errors)
        print("PAGE ERRORS:", page_errors)

        # ThSyr VisualCraftValidator static check
        sys.path.insert(0, r"C:\Users\stdma\projetos\ThSyr")
        from engine.visual.validator import VisualCraftValidator

        v = VisualCraftValidator()
        combined = (
            (ROOT / "templates" / "index.html").read_text(encoding="utf-8")
            + "\n<style>\n"
            + (ROOT / "static" / "styles.css").read_text(encoding="utf-8")
            + "\n</style>"
        )
        print("VISUAL CRAFT VALIDATOR:", v.audit_content(combined, source_name="portfolio-v2-swiss"))

        # Check zero purple hex codes in styles.css (HSV 250-330)
        css_txt = (ROOT / "static" / "styles.css").read_text(encoding="utf-8")
        purple_hits = []
        for hx in set(re.findall(r"#([0-9a-fA-F]{6})\b", css_txt)):
            r, g, b = int(hx[0:2], 16) / 255.0, int(hx[2:4], 16) / 255.0, int(hx[4:6], 16) / 255.0
            h, s, val = colorsys.rgb_to_hsv(r, g, b)
            deg = h * 360.0
            if 250.0 <= deg <= 330.0 and s > 0.15 and val > 0.1:
                purple_hits.append((f"#{hx}", round(deg, 1), round(s, 2)))
        print("PURPLE SPECTRUM AUDIT:", purple_hits)

        # Source-level grep audit for forbidden entities
        src_leaks = []
        for rel in ("templates/index.html", "static/styles.css", "static/script.js", "app.py"):
            txt = (ROOT / rel).read_text(encoding="utf-8").lower()
            for needle in ("bosch", "gods-eye", "godseye", "god's eye", "thsyr_neural_core.png"):
                if needle in txt:
                    src_leaks.append((rel, needle))
        print("FORBIDDEN ENTITY SOURCE AUDIT:", src_leaks)

    finally:
        srv.shutdown()
        preview = ROOT / "_audit_preview.html"
        if preview.exists():
            preview.unlink()


if __name__ == "__main__":
    main()
