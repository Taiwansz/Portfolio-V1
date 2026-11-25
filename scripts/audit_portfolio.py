"""
Matheus Sousa Portfolio 2026 — Macro-Scrollytelling Multi-Viewport Playwright Auditor
Captures Desktop 1440x900 across ALL 9 acts (opening live 3D core, sticky genesis, zig-zag
particle manifesto, CAD blueprint, 5-step EVP, horizontal complexity gallery, monumental KPI
+ TokLang workbench, strikethrough manifesto, filterable index + contact, Sumario overlay)
AND Mobile 390x844 states. Verifies 0px overflow, 0 console/page errors, 0 broken images,
live 3D core delta, 0 purple HSV 250-330, 0 Bosch/Gods Eye leaks, and VisualCraftValidator.
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
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, f"http://127.0.0.1:{port}/_audit_preview.html"


def check_page_health(page, label: str) -> dict:
    return page.evaluate(
        """(label) => {
            const imgs = Array.from(document.querySelectorAll('img')).filter(i => i.getAttribute('src'));
            const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
            const bodyText = (document.body.innerText || '').toLowerCase();
            const forbiddenHits = ['bosch', 'gods-eye', 'gods eye', "god's eye", 'eva robot'].filter(k => bodyText.includes(k));
            return {
                label,
                innerWidth: window.innerWidth,
                scrollWidth: document.documentElement.scrollWidth,
                overflowX: document.documentElement.scrollWidth - window.innerWidth,
                scrollHeight: document.documentElement.scrollHeight,
                totalImgs: imgs.length,
                brokenImgs: broken,
                forbiddenHits,
            };
        }""",
        label,
    )


def sample_core(page) -> dict:
    return page.evaluate(
        """() => {
            const c = document.getElementById('thsyrLiveCore');
            if (!c) return { ok: false };
            const ctx = c.getContext('2d');
            const data = ctx.getImageData(0, 0, c.width, c.height).data;
            let gold = 0, hash = 0;
            for (let i = 0; i < data.length; i += 64) {
                const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
                if (a > 30 && r > 120 && g > 70 && r > b * 1.35) gold++;
                hash = (hash * 31 + r + g * 3 + b * 7) % 1000000007;
            }
            return { ok: gold > 200, gold, hash };
        }"""
    )


def get_chrome(page) -> dict:
    return page.evaluate(
        """() => ({
            theme: document.body.dataset.hdrTheme || null,
            showBrand: document.body.classList.contains('show-brand'),
            chapter: (document.getElementById('sideChapterName') || {}).textContent || null,
            hdrTop: Math.round(document.getElementById('siteHeader').getBoundingClientRect().top),
        })"""
    )


def main():
    for old in SHOTS.glob("*.png"):
        old.unlink()

    py_compile.compile(str(ROOT / "app.py"), doraise=True)
    print("PY_COMPILE app.py: OK")

    srv, url = start_server()
    console_errors = []
    page_errors = []

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)

            # ================= DESKTOP 1440x900 =================
            ctx = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1.5)
            page = ctx.new_page()
            page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
            page.on("pageerror", lambda e: page_errors.append(str(e)))

            page.goto(url, wait_until="networkidle", timeout=60000)
            page.wait_for_timeout(1300)
            c1 = sample_core(page)
            page.screenshot(path=str(SHOTS / "01_desktop_hero_core.png"))
            page.wait_for_timeout(420)
            c2 = sample_core(page)
            anim_ok = c1["hash"] != c2["hash"]

            # Walk cleanly across key scroll stops (using exact element offsets + pin midpoints)
            stops = page.evaluate(
                """() => {
                    const topOf = (sel) => {
                        const el = document.querySelector(sel);
                        return el ? Math.round(el.getBoundingClientRect().top + window.scrollY) : 0;
                    };
                    return {
                        genese: topOf('#genese') + 120,
                        manifesto: topOf('#manifesto') + 260,
                        cad_mid: topOf('#arquitetura') + 1550,
                        thsyr_step3: topOf('#thsyr') + 1250,
                        olhar_mid: topOf('#complexidade') + 950,
                        toklang_kpi: topOf('#toklang-kpi'),
                        toklang_lab: topOf('#toklang-lab'),
                        resp_mid: topOf('#principios') + 780,
                        indice: topOf('#indice'),
                        contato: document.documentElement.scrollHeight - 900,
                    };
                }"""
            )

            chrome_log = {"hero": get_chrome(page)}
            order = [
                ("02_desktop_genese.png", "genese"),
                ("03_desktop_manifesto_wave.png", "manifesto"),
                ("04_desktop_cad_blueprint.png", "cad_mid"),
                ("05_desktop_thsyr_evp.png", "thsyr_step3"),
                ("06_desktop_horizontal_gallery.png", "olhar_mid"),
                ("07_desktop_toklang_kpi.png", "toklang_kpi"),
                ("08_desktop_toklang_workbench.png", "toklang_lab"),
                ("09_desktop_strikethrough.png", "resp_mid"),
                ("10_desktop_index.png", "indice"),
                ("11_desktop_contact.png", "contato"),
            ]
            for fname, key in order:
                page.evaluate(f"window.scrollTo(0, {stops[key]})")
                page.wait_for_timeout(520)
                chrome_log[key] = get_chrome(page)
                page.screenshot(path=str(SHOTS / fname))

            # Open Sumario menu overlay & verify
            page.locator("#menuToggleBtn").click()
            page.wait_for_timeout(800)
            page.screenshot(path=str(SHOTS / "12_desktop_sumario_menu.png"))
            page.locator("#menuToggleBtn").click()
            page.wait_for_timeout(600)

            desktop_health = check_page_health(page, "desktop_1440")
            ctx.close()

            # ================= MOBILE 390x844 =================
            mctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, is_mobile=True)
            mpage = mctx.new_page()
            mpage.on("console", lambda m: console_errors.append("[MOB] " + m.text) if m.type == "error" else None)
            mpage.on("pageerror", lambda e: page_errors.append("[MOB] " + str(e)))

            mpage.goto(url, wait_until="networkidle", timeout=60000)
            mpage.wait_for_timeout(1200)
            mpage.screenshot(path=str(SHOTS / "13_mobile_hero.png"))

            mpage.evaluate("document.getElementById('coreStage').scrollIntoView({block:'center'})")
            mpage.wait_for_timeout(500)
            mpage.screenshot(path=str(SHOTS / "14_mobile_core.png"))

            mpage.evaluate("document.getElementById('complexidade').scrollIntoView({block:'start'})")
            mpage.wait_for_timeout(500)
            mpage.screenshot(path=str(SHOTS / "15_mobile_gallery.png"))

            mpage.evaluate("document.getElementById('principios').scrollIntoView({block:'start'})")
            mpage.wait_for_timeout(500)
            mpage.screenshot(path=str(SHOTS / "16_mobile_principios.png"))

            mobile_health = check_page_health(mpage, "mobile_390")
            mctx.close()
            browser.close()

        print("LIVE 3D CORE:", c1, "ANIMATED:", anim_ok)
        print("CHROME TELEMETRY:", chrome_log)
        print("DESKTOP HEALTH:", desktop_health)
        print("MOBILE HEALTH:", mobile_health)
        print("CONSOLE ERRORS:", console_errors)
        print("PAGE ERRORS:", page_errors)

        sys.path.insert(0, r"C:\Users\stdma\projetos\ThSyr")
        from engine.visual.validator import VisualCraftValidator
        v = VisualCraftValidator()
        combined = (ROOT / "templates" / "index.html").read_text(encoding="utf-8") + "\n<style>\n" + (ROOT / "static" / "styles.css").read_text(encoding="utf-8") + "\n</style>"
        print("VISUAL CRAFT VALIDATOR:", v.audit_content(combined, source_name="portfolio-v2-scrollytelling"))

        css_txt = (ROOT / "static" / "styles.css").read_text(encoding="utf-8")
        purple_hits = []
        for hx in set(re.findall(r"#([0-9a-fA-F]{6})\b", css_txt)):
            r, g, b = int(hx[0:2], 16) / 255.0, int(hx[2:4], 16) / 255.0, int(hx[4:6], 16) / 255.0
            h, s, val = colorsys.rgb_to_hsv(r, g, b)
            deg = h * 360.0
            if 250.0 <= deg <= 330.0 and s > 0.15 and val > 0.1:
                purple_hits.append((f"#{hx}", round(deg, 1), round(s, 2)))
        print("PURPLE SPECTRUM AUDIT:", purple_hits)

    finally:
        srv.shutdown()
        preview = ROOT / "_audit_preview.html"
        if preview.exists():
            preview.unlink()


if __name__ == "__main__":
    main()
