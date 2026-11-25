"""
Matheus Sousa Portfolio v2 — Real Studio Asset & Cutout Pipeline
Prepares verified, zero-gibberish visual assets from Matheus's real projects on disk:
1. thsyr_neural_core.png  — Pure transparent-alpha cutout of the 3D Golden ThSyr Neural Core
2. bosch_eva_cutout.png   — Pure transparent-alpha cutout of the Blender MCP 3D EVA Robot
3. thsyr_graph_canvas.png — Clean cropped 5-lobe ThSyr neural graph view
4. thpay_ui.jpg           — Clean high-DPI cropped executive payroll UI from ThPay
5. apple_craft.png        — Real verified Apple Showcase Hero capture
6. atlas_tablet.jpg       — Clean verified Atlas AST Governance hardware mockup
7. thallium_tablet.jpg    — Clean verified Thallium Double-Entry Ledger mockup
8. matheus_portrait.jpg   — Cleanly framed portrait from Portfolio-V1/static/images/me.png
9. monogram_m.png         — Clean transparent white monogram M from M.png
Generates a contact sheet to inspect every asset before writing HTML.
"""

from collections import deque
from pathlib import Path
import shutil
import numpy as np
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

PORTFOLIO = Path(r"C:\Users\stdma\projetos\Portfolio-V1")
OUT = PORTFOLIO / "static" / "images" / "v2"
OUT.mkdir(parents=True, exist_ok=True)


def extract_neural_core():
    """Crop the central glowing golden 3D neural sphere from neural_brain_3d.png and key dark bg to clean alpha."""
    src = Path(r"C:\Users\stdma\projetos\ThSyr\assets\neural_brain_3d.png")
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    # Isolate center 3D golden orb cleanly (removing left sidebar and bottom caption)
    crop = im.crop((int(w * 0.28), int(h * 0.16), int(w * 0.72), int(h * 0.88)))
    arr = np.array(crop, dtype=np.float32)
    rgb = arr[:, :, :3]
    # Dark obsidian background around orb is approx (3, 6, 10)
    bg = np.array([3.0, 6.0, 10.0], dtype=np.float32)
    diff = rgb - bg
    lum = np.sqrt(np.sum(diff * diff, axis=2))
    # Smooth luminance-based alpha so golden glow particles float seamlessly with additive-like warmth!
    alpha = np.clip((lum - 8.0) / 58.0, 0.0, 1.0)
    alpha = np.power(alpha, 0.85) * 255.0
    out = np.zeros_like(arr, dtype=np.uint8)
    # Boost warm gold richness slightly where visible
    out[:, :, :3] = np.clip(rgb * 1.08, 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(alpha, 0, 255).astype(np.uint8)
    res = Image.fromarray(out, "RGBA")
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.thumbnail((960, 960), Image.Resampling.LANCZOS)
    res.save(OUT / "thsyr_neural_core.png", optimize=True)
    return OUT / "thsyr_neural_core.png"


def extract_bosch_eva():
    """Cut out the Blender MCP 3D Bosch EVA robot from solid navy studio background to clean RGBA."""
    src = Path(r"C:\Users\stdma\projetos\bosch-robot-3d\renders\hero_v7.png")
    im = Image.open(src).convert("RGBA")
    arr = np.array(im, dtype=np.float32)
    rgb = arr[:, :, :3]
    h, w, _ = rgb.shape
    border = np.concatenate([rgb[:8].reshape(-1, 3), rgb[-8:].reshape(-1, 3), rgb[:, :8].reshape(-1, 3), rgb[:, -8:].reshape(-1, 3)], axis=0)
    bg = np.median(border, axis=0)
    dist = np.sqrt(np.sum((rgb - bg) ** 2, axis=2))

    hard_t, soft_t = 22.0, 56.0
    def flood(thresh):
        vis = np.zeros((h, w), dtype=bool)
        passable = dist <= thresh
        q = deque()
        for x in range(w):
            if passable[0, x]: vis[0, x] = True; q.append((0, x))
            if passable[h - 1, x]: vis[h - 1, x] = True; q.append((h - 1, x))
        for y in range(1, h - 1):
            if passable[y, 0]: vis[y, 0] = True; q.append((y, 0))
            if passable[y, w - 1]: vis[y, w - 1] = True; q.append((y, w - 1))
        while q:
            cy, cx = q.popleft()
            for ny, nx in ((cy - 1, cx), (cy + 1, cx), (cy, cx - 1), (cy, cx + 1)):
                if 0 <= ny < h and 0 <= nx < w and not vis[ny, nx] and passable[ny, nx]:
                    vis[ny, nx] = True
                    q.append((ny, nx))
        return vis

    ext_hard = flood(hard_t)
    ext_soft = flood(soft_t)
    alpha = np.full((h, w), 255.0, dtype=np.float32)
    alpha[ext_hard] = 0.0
    dil = np.array(Image.fromarray((ext_hard.astype(np.uint8) * 255), "L").filter(ImageFilter.MaxFilter(5))) > 127
    trans = (ext_soft & ~ext_hard) | (dil & (dist < soft_t))
    t = np.clip((dist - hard_t) / (soft_t - hard_t), 0.0, 1.0)
    smooth = t * t * (3.0 - 2.0 * t)
    alpha[trans] = np.minimum(alpha[trans], smooth[trans] * 255.0)
    a_img = Image.fromarray(np.clip(alpha, 0, 255).astype(np.uint8), "L").filter(ImageFilter.GaussianBlur(0.6))
    a_blur = np.array(a_img, dtype=np.float32)
    edge = np.array(Image.fromarray(((alpha < 250).astype(np.uint8) * 255), "L").filter(ImageFilter.MaxFilter(5))) > 127
    alpha_final = np.where(edge, np.minimum(alpha, a_blur), alpha)

    # Decontaminate navy edge fringe
    a_norm = np.clip(alpha_final / 255.0, 0.0, 1.0)
    semi = (a_norm > 0.04) & (a_norm < 0.96)
    out_rgb = rgb.copy()
    for ch in range(3):
        c_fg = (rgb[:, :, ch] - (1.0 - a_norm) * bg[ch]) / np.maximum(a_norm, 0.18)
        out_rgb[:, :, ch] = np.where(semi, np.clip(c_fg, 0, 255), rgb[:, :, ch])

    out = np.zeros_like(arr, dtype=np.uint8)
    out[:, :, :3] = np.clip(out_rgb, 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(alpha_final, 0, 255).astype(np.uint8)
    res = Image.fromarray(out, "RGBA")
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.thumbnail((820, 820), Image.Resampling.LANCZOS)
    res.save(OUT / "bosch_eva_cutout.png", optimize=True)
    return OUT / "bosch_eva_cutout.png"


def extract_monogram():
    """Turn M.png (silver M on black) into clean transparent RGBA monogram."""
    src = PORTFOLIO / "static" / "images" / "M.png"
    im = Image.open(src).convert("RGBA")
    arr = np.array(im, dtype=np.float32)
    lum = np.mean(arr[:, :, :3], axis=2)
    alpha = np.clip((lum - 10.0) / 140.0, 0.0, 1.0) * 255.0
    out = np.zeros_like(arr, dtype=np.uint8)
    out[:, :, :3] = 245
    out[:, :, 3] = alpha.astype(np.uint8)
    res = Image.fromarray(out, "RGBA")
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.thumbnail((256, 256), Image.Resampling.LANCZOS)
    res.save(OUT / "monogram_m.png", optimize=True)
    return OUT / "monogram_m.png"


def prepare_editorial_assets():
    paths = []

    # ThSyr graph clean crop (center graph + minimal chrome)
    g_src = Path(r"C:\Users\stdma\projetos\ThSyr\assets\canvas_v2_grafo.png")
    g_im = Image.open(g_src).convert("RGB")
    gw, gh = g_im.size
    g_im = g_im.crop((int(gw * 0.22), int(gh * 0.08), int(gw * 0.78), int(gh * 0.94)))
    g_im.thumbnail((1100, 900), Image.Resampling.LANCZOS)
    g_im.save(OUT / "thsyr_graph.jpg", quality=92)
    paths.append(OUT / "thsyr_graph.jpg")

    # ThPay dashboard crisp right-panel crop
    tp_src = Path(r"C:\Users\stdma\projetos\ThPay\brag-output\brag_poster.jpg")
    tp_im = Image.open(tp_src).convert("RGB")
    tw, th = tp_im.size
    tp_im = tp_im.crop((int(tw * 0.45), int(th * 0.10), int(tw * 0.99), int(th * 0.80)))
    tp_im.thumbnail((1100, 800), Image.Resampling.LANCZOS)
    tp_im.save(OUT / "thpay_ui.jpg", quality=92)
    paths.append(OUT / "thpay_ui.jpg")

    # Atlas & Thallium clean copies
    for src_name, dst_name in [("atlas_cover.png", "atlas_tablet.jpg"), ("thallium_cover.png", "thallium_tablet.jpg")]:
        im = Image.open(PORTFOLIO / "static" / "images" / src_name).convert("RGB")
        im.thumbnail((1200, 800), Image.Resampling.LANCZOS)
        im.save(OUT / dst_name, quality=92)
        paths.append(OUT / dst_name)

    # Apple showcase hero capture
    ap_src = Path(r"C:\Users\stdma\projetos\apple-showcase\screenshots\01_desktop_hero.png")
    if ap_src.exists():
        ap_im = Image.open(ap_src).convert("RGB")
        ap_im.thumbnail((1200, 800), Image.Resampling.LANCZOS)
        ap_im.save(OUT / "apple_craft.jpg", quality=92)
        paths.append(OUT / "apple_craft.jpg")

    # Portrait clean studio tonal polish (subtle contrast + clean 4:5 crop)
    me_src = PORTFOLIO / "static" / "images" / "me.png"
    me_im = Image.open(me_src).convert("RGB")
    mw, mh = me_im.size
    # Center upper-torso 4:5 crop
    target_h = int(mw * 1.2)
    top = max(0, int((mh - target_h) * 0.35))
    me_im = me_im.crop((0, top, mw, min(mh, top + target_h)))
    me_im = ImageEnhance.Contrast(me_im).enhance(1.06)
    me_im = ImageEnhance.Color(me_im).enhance(0.92)
    me_im.thumbnail((840, 1020), Image.Resampling.LANCZOS)
    me_im.save(OUT / "matheus_portrait.jpg", quality=92)
    paths.append(OUT / "matheus_portrait.jpg")

    return paths


def build_sheet(asset_paths):
    cols = 3
    rows = (len(asset_paths) + cols - 1) // cols
    cw, ch = 400, 300
    sheet = Image.new("RGB", (cols * cw, rows * ch), (14, 15, 19))
    draw = ImageDraw.Draw(sheet)
    for idx, p in enumerate(asset_paths):
        r, c = divmod(idx, cols)
        x0, y0 = c * cw, r * ch
        draw.rectangle([x0, y0, x0 + cw // 2, y0 + ch], fill=(10, 11, 14))
        draw.rectangle([x0 + cw // 2, y0, x0 + cw, y0 + ch], fill=(242, 240, 236))
        im = Image.open(p).convert("RGBA")
        im.thumbnail((cw - 32, ch - 52), Image.Resampling.LANCZOS)
        px = x0 + (cw - im.width) // 2
        py = y0 + 28 + (ch - 36 - im.height) // 2
        sheet.paste(im, (px, py), im)
        draw.rectangle([x0, y0, x0 + cw, y0 + 24], fill=(0, 0, 0))
        draw.text((x0 + 10, y0 + 6), p.name, fill=(240, 237, 230))
    sheet_path = OUT / "_contact_sheet.png"
    sheet.save(sheet_path)
    return sheet_path


def main():
    assets = [
        extract_neural_core(),
        extract_bosch_eva(),
        extract_monogram(),
        *prepare_editorial_assets(),
    ]
    sheet = build_sheet(assets)
    for a in assets:
        print(f"[OK] {a.name} ({a.stat().st_size // 1024} KB)")
    print(f"[SHEET] {sheet}")


if __name__ == "__main__":
    main()
