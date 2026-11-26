"""
Matheus Sousa Portfolio 2026 — Sovereign Obsidian Precision Atelier Multi-Viewport Auditor
Runs real Flask routes check, VisualCraftValidator, HSV purple / #00ff88 scan,
forbidden third-party leak check (0 Bosch / God's Eye), and Playwright Firefox
desktop (1440x900) + mobile (390x844) full visual & interactive verification.
"""

import colorsys
import json
import py_compile
import re
import sys
import threading
import time
import urllib.request
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = Path("/root/.gemini/antigravity-cli/brain/1a044b03-c1b2-4aad-8105-1f0da2595cb6/scratch")
OUT_DIR.mkdir(parents=True, exist_ok=True)
sys.path.insert(0, str(ROOT))
sys.path.insert(0, "/root/ThSyr")

from engine.visual.validator import VisualCraftValidator


def start_preview_server():
    try:
        from app import app as flask_app

        client = flask_app.test_client()
        routes = {}
        for r in ("/", "/projetos/taskflow/app", "/projetos/cryptovision/app", "/projetos/auraweather/app", "/projetos/sonicweave/app"):
            resp = client.get(r)
            routes[r] = resp.status_code
            assert resp.status_code == 200, f"Flask route {r} returned {resp.status_code}"

        t = threading.Thread(
            target=lambda: flask_app.run(host="127.0.0.1", port=5521, debug=False, use_reloader=False),
            daemon=True,
        )
        t.start()
        opener = urllib.request.build_opener(urllib.request.ProxyHandler({}))
        deadline = time.time() + 15
        while time.time() < deadline:
            try:
                with opener.open("http://127.0.0.1:5521/", timeout=2) as r:
                    if r.status == 200:
                        return None, None, "http://127.0.0.1:5521/", routes
            except Exception:
                time.sleep(0.25)
        raise RuntimeError("Flask test server did not start")
    except ModuleNotFoundError:
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
        return srv, preview, f"http://127.0.0.1:{port}/_audit_preview.html", {"mode": "static_preview_fallback_no_flask"}


def main() -> None:
    for pyfile in sorted(ROOT.glob("*.py")):
        py_compile.compile(str(pyfile), doraise=True)

    html = (ROOT / "templates" / "index.html").read_text(encoding="utf-8")
    css = (ROOT / "static" / "css" / "atelier.css").read_text(encoding="utf-8")
    validator = VisualCraftValidator()
    static_audit = validator.audit_content(html + "\n<style>\n" + css + "\n</style>", source_name="portfolio-atelier")

    neon_hits = re.findall(r"#00ff88|rgba\(\s*0\s*,\s*255\s*,\s*136", css, flags=re.IGNORECASE)
    purple_hits = []
    for hx in set(re.findall(r"#([0-9a-fA-F]{6})\b", css)):
        r, g, b = int(hx[0:2], 16) / 255.0, int(hx[2:4], 16) / 255.0, int(hx[4:6], 16) / 255.0
        h, s, v = colorsys.rgb_to_hsv(r, g, b)
        deg = h * 360.0
        if 250.0 <= deg <= 330.0 and s > 0.2 and v > 0.12:
            purple_hits.append({"hex": f"#{hx}", "hue": round(deg, 1)})

    srv, preview_file, entry_url, flask_routes = start_preview_server()
    runtime = {}

    try:
        with sync_playwright() as p:
            browser = p.firefox.launch(headless=True)
            try:
                for vp_name, vp in (("desktop", {"width": 1440, "height": 900}), ("mobile", {"width": 390, "height": 844})):
                    ctx = browser.new_context(viewport=vp, device_scale_factor=1)
                    page = ctx.new_page()
                    console_errs, page_errs, failed_reqs = [], [], []
                    page.on("console", lambda m: console_errs.append(m.text) if m.type == "error" else None)
                    page.on("pageerror", lambda e: page_errs.append(str(e)))
                    page.on("requestfailed", lambda r: failed_reqs.append(f"{r.url}: {r.failure}"))

                    page.goto(entry_url, wait_until="networkidle", timeout=30000)
                    page.wait_for_timeout(1000)

                    hero_info = page.evaluate(
                        """() => {
                            const img = document.querySelector('.hero-sculpture-img');
                            const imgs = Array.from(document.querySelectorAll('img')).filter(i => i.getAttribute('src'));
                            const broken = imgs.filter(i => !i.complete || i.naturalWidth === 0).map(i => i.getAttribute('src'));
                            const txt = (document.body.innerText || '').toLowerCase();
                            const forbidden = ['bosch', 'gods-eye', 'gods eye', "god's eye", 'eva robot'].filter(k => txt.includes(k));
                            return {
                                overflowX: Math.max(0, document.documentElement.scrollWidth - window.innerWidth),
                                scrollWidth: document.documentElement.scrollWidth,
                                innerWidth: window.innerWidth,
                                gyroLoaded: !!(img && img.complete && img.naturalWidth > 0),
                                brokenImgs: broken,
                                forbiddenHits: forbidden,
                                hdrThemeTop: document.body.dataset.hdrTheme,
                            };
                        }"""
                    )
                    page.screenshot(path=str(OUT_DIR / f"port_v3_hero_{vp_name}.png"))

                    page.evaluate("() => document.getElementById('genese').scrollIntoView({block:'start'})")
                    page.wait_for_timeout(500)
                    hdr_genesis = page.evaluate("() => document.body.dataset.hdrTheme")
                    if vp_name == "desktop":
                        page.screenshot(path=str(OUT_DIR / "port_v3_genesis_desktop.png"))

                    page.evaluate("() => document.getElementById('arquitetura').scrollIntoView({block:'start'})")
                    page.wait_for_timeout(950)
                    if vp_name == "desktop":
                        page.screenshot(path=str(OUT_DIR / "port_v3_cad_desktop.png"))

                    page.evaluate("() => document.getElementById('thsyr').scrollIntoView({block:'start'})")
                    page.wait_for_timeout(600)
                    page.locator(".thsyr-row").nth(1).click()
                    page.wait_for_timeout(350)
                    thsyr_kicker = page.locator("#thsyrStageKicker").inner_text()
                    hdr_thsyr = page.evaluate("() => document.body.dataset.hdrTheme")
                    page.screenshot(path=str(OUT_DIR / f"port_v3_thsyr_{vp_name}.png"))

                    page.evaluate("() => document.getElementById('complexidade').scrollIntoView({block:'start'})")
                    page.wait_for_timeout(450)
                    if vp_name == "desktop":
                        page.screenshot(path=str(OUT_DIR / "port_v3_systems_desktop.png"))

                    page.evaluate("() => document.getElementById('toklang-lab').scrollIntoView({block:'start'})")
                    page.wait_for_timeout(1600)
                    wb_dev = page.locator("#tokOutput").inner_text()
                    page.locator(".wb-preset").nth(1).click()
                    page.wait_for_timeout(250)
                    wb_json_head = page.locator("#tokOutput").inner_text().splitlines()[0]
                    wb_pol = page.locator("#tokPolarityAudit").inner_text()
                    page.screenshot(path=str(OUT_DIR / f"port_v3_toklang_{vp_name}.png"))

                    if vp_name == "desktop":
                        page.locator("#contato").scroll_into_view_if_needed()
                        page.wait_for_timeout(400)
                        page.screenshot(path=str(OUT_DIR / "port_v3_contact_desktop.png"))

                    runtime[vp_name] = {
                        **hero_info,
                        "hdrThemeGenesis": hdr_genesis,
                        "hdrThemeThSyr": hdr_thsyr,
                        "thsyrKickerAfterClick": thsyr_kicker,
                        "wbDevPreservesNegation": "sem usar ORM" in wb_dev and "não deve expor" in wb_dev,
                        "wbJsonHead": wb_json_head,
                        "wbPolarity": wb_pol,
                        "console_errors": console_errs,
                        "page_errors": page_errs,
                        "failed_requests": failed_reqs,
                    }
                    ctx.close()
            finally:
                browser.close()
    finally:
        if srv:
            srv.shutdown()
        if preview_file and preview_file.exists():
            preview_file.unlink()

    print(
        json.dumps(
            {
                "flask_routes": flask_routes,
                "static_validator": {
                    "passed": static_audit["passed"],
                    "score": static_audit["score"],
                    "errors": static_audit["errors"],
                    "warnings": static_audit["warnings"],
                },
                "neon_green_hits": len(neon_hits),
                "purple_hsv_hits": purple_hits,
                "runtime": runtime,
            },
            indent=2,
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    main()
