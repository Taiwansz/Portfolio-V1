"""
Matheus Sousa Portfolio v2 — Multi-State Kinetic Playwright Visual Auditor
Serves the real Flask app (or fallback Jinja2-rendered static server if a Flask dep is absent),
captures 14 views & interactive states across Desktop 1440x900 and Mobile 390x844,
verifies zero purple/violet violations, zero console errors, zero broken images, and 0px overflow.
"""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re
import sys
import threading
import time
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
            return {
                label,
                innerWidth: window.innerWidth,
                scrollWidth: document.documentElement.scrollWidth,
                overflowX: document.documentElement.scrollWidth - window.innerWidth,
                totalImgs: imgs.length,
                brokenImgs: broken,
            };
        }""",
        label,
    )


def main():
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
            page.wait_for_timeout(2400)
            page.screenshot(path=str(SHOTS / "01_desktop_hero.png"))

            # Scroll cleanly to top of #projetos (#01 ThSyr Flagship)
            page.evaluate("document.getElementById('projetos').scrollIntoView({block:'start'})")
            page.wait_for_timeout(850)
            page.screenshot(path=str(SHOTS / "02_desktop_flagship_thsyr.png"))

            # Scroll cleanly to #02-#06 Bento Grid
            page.evaluate("document.querySelector('.bento-grid').scrollIntoView({block:'center'})")
            page.wait_for_timeout(850)
            page.screenshot(path=str(SHOTS / "03_desktop_complexity_bento.png"))

            # Open ThSyr Dossier Drawer & capture
            page.locator(".flagship-card").click()
            page.wait_for_timeout(550)
            page.screenshot(path=str(SHOTS / "04_desktop_dossier_drawer.png"))
            page.locator("#closeDossierBtn").click()
            page.wait_for_timeout(400)

            # Scroll cleanly to Lab -> ThSyr default
            page.evaluate("document.getElementById('arquitetura').scrollIntoView({block:'start'})")
            page.wait_for_timeout(700)
            page.screenshot(path=str(SHOTS / "05_desktop_lab_thsyr.png"))

            # Switch Lab -> TokLang Live Compiler (light theme!)
            page.locator('.lab-tab[data-lab="toklang"]').click()
            page.wait_for_timeout(700)
            page.screenshot(path=str(SHOTS / "06_desktop_lab_toklang.png"))

            # Switch Lab -> God's Eye View Live Orbital Canvas
            page.locator('.lab-tab[data-lab="godseye"]').click()
            page.wait_for_timeout(700)
            page.screenshot(path=str(SHOTS / "07_desktop_lab_godseye.png"))

            # Scroll cleanly to Brief Chassis -> add 4 capabilities to seal lid!
            page.evaluate("document.getElementById('escopo').scrollIntoView({block:'start'})")
            page.wait_for_timeout(700)
            page.locator('[data-cap-add="cap-agents"]').click()
            page.wait_for_timeout(200)
            page.locator('[data-cap-add="cap-compilers"]').click()
            page.wait_for_timeout(200)
            page.locator('[data-cap-add="cap-data"]').click()
            page.wait_for_timeout(550)
            page.screenshot(path=str(SHOTS / "08_desktop_brief_building.png"))

            page.locator('[data-cap-add="cap-ast"]').click()
            page.wait_for_timeout(950)
            page.screenshot(path=str(SHOTS / "09_desktop_brief_sealed.png"))

            # Scroll cleanly to Trajectory & Portrait (top aligned)
            page.evaluate("document.getElementById('trajetoria').scrollIntoView({block:'start'})")
            page.wait_for_timeout(700)
            page.screenshot(path=str(SHOTS / "10_desktop_story.png"))

            # Scroll cleanly to Finale
            page.evaluate("document.getElementById('contato').scrollIntoView({block:'start'})")
            page.wait_for_timeout(700)
            page.screenshot(path=str(SHOTS / "11_desktop_finale.png"))

            desktop_health = check_page_health(page, "desktop_1440")
            ctx.close()

            # ================= MOBILE 390x844 =================
            mctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2, is_mobile=True)
            mpage = mctx.new_page()
            mpage.on("console", lambda m: console_errors.append("[MOB] " + m.text) if m.type == "error" else None)
            mpage.on("pageerror", lambda e: page_errors.append("[MOB] " + str(e)))

            mpage.goto(url, wait_until="networkidle")
            mpage.wait_for_timeout(2400)
            mpage.screenshot(path=str(SHOTS / "12_mobile_hero.png"))

            mpage.locator("#projetos").scroll_into_view_if_needed()
            mpage.wait_for_timeout(700)
            mpage.screenshot(path=str(SHOTS / "13_mobile_flagship.png"))

            mpage.locator("#arquitetura").scroll_into_view_if_needed()
            mpage.wait_for_timeout(700)
            mpage.screenshot(path=str(SHOTS / "14_mobile_lab.png"))

            mobile_health = check_page_health(mpage, "mobile_390")
            mctx.close()
            browser.close()

        print("SERVER MODE:", mode)
        print("DESKTOP HEALTH:", desktop_health)
        print("MOBILE HEALTH:", mobile_health)
        print("CONSOLE ERRORS:", console_errors)
        print("PAGE ERRORS:", page_errors)

        # ThSyr VisualCraftValidator check
        sys.path.insert(0, r"C:\Users\stdma\projetos\ThSyr")
        from engine.visual.validator import VisualCraftValidator
        v = VisualCraftValidator()
        combined = (ROOT / "templates" / "index.html").read_text(encoding="utf-8") + "\n<style>\n" + (ROOT / "static" / "styles.css").read_text(encoding="utf-8") + "\n</style>"
        print("VISUAL CRAFT VALIDATOR:", v.audit_content(combined, source_name="portfolio-v2"))

        # Check zero purple hex codes in styles.css (HSV 250-330)
        import colorsys
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
