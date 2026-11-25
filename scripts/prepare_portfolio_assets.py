"""
Matheus Sousa Portfolio v2 — Real Studio Asset Pipeline
Prepares verified visual assets from Matheus's own projects on disk:
1. monogram_m.png      — Clean transparent white monogram M from M.png
2. thpay_ui.jpg        — Clean high-DPI cropped executive payroll UI from ThPay
3. atlas_tablet.jpg    — Clean verified Atlas AST Governance hardware mockup
4. thallium_tablet.jpg — Clean verified Thallium Double-Entry Ledger mockup
5. matheus_portrait.jpg — Cleanly framed studio portrait from static/images/me.png
Note: The ThSyr 3D Golden Neural Core is rendered live in real time on HTML5 Canvas (script.js).
"""

from pathlib import Path
import numpy as np
from PIL import Image, ImageEnhance

PORTFOLIO = Path(r"C:\Users\stdma\projetos\Portfolio-V1")
OUT = PORTFOLIO / "static" / "images" / "v2"
OUT.mkdir(parents=True, exist_ok=True)


def extract_monogram() -> Path:
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
    dst = OUT / "monogram_m.png"
    res.save(dst, optimize=True)
    return dst


def prepare_editorial_assets() -> list[Path]:
    paths: list[Path] = []

    # ThPay dashboard crisp right-panel crop
    tp_src = Path(r"C:\Users\stdma\projetos\ThPay\brag-output\brag_poster.jpg")
    if tp_src.exists():
        tp_im = Image.open(tp_src).convert("RGB")
        tw, th = tp_im.size
        tp_im = tp_im.crop((int(tw * 0.45), int(th * 0.10), int(tw * 0.99), int(th * 0.80)))
        tp_im.thumbnail((1100, 800), Image.Resampling.LANCZOS)
        dst = OUT / "thpay_ui.jpg"
        tp_im.save(dst, quality=92)
        paths.append(dst)

    # Atlas & Thallium clean copies
    for src_name, dst_name in [("atlas_cover.png", "atlas_tablet.jpg"), ("thallium_cover.png", "thallium_tablet.jpg")]:
        src = PORTFOLIO / "static" / "images" / src_name
        if src.exists():
            im = Image.open(src).convert("RGB")
            im.thumbnail((1200, 800), Image.Resampling.LANCZOS)
            dst = OUT / dst_name
            im.save(dst, quality=92)
            paths.append(dst)

    # Portrait clean studio tonal polish (4:5 crop)
    me_src = PORTFOLIO / "static" / "images" / "me.png"
    if me_src.exists():
        me_im = Image.open(me_src).convert("RGB")
        mw, mh = me_im.size
        target_h = int(mw * 1.2)
        top = max(0, int((mh - target_h) * 0.35))
        me_im = me_im.crop((0, top, mw, min(mh, top + target_h)))
        me_im = ImageEnhance.Contrast(me_im).enhance(1.06)
        me_im = ImageEnhance.Color(me_im).enhance(0.92)
        me_im.thumbnail((840, 1020), Image.Resampling.LANCZOS)
        dst = OUT / "matheus_portrait.jpg"
        me_im.save(dst, quality=92)
        paths.append(dst)

    return paths


def main() -> None:
    assets = [extract_monogram(), *prepare_editorial_assets()]
    for a in assets:
        print(f"[OK] {a.name} ({a.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
