#!/usr/bin/env python3
"""Render a 1000x1500 Pinterest pin for every recipe.

Usage: python3 scripts/make-pins.py <fonts-dir> [out-dir]
The fonts dir needs Rufina-Bold.ttf, WorkSans[wght].ttf and SpaceGrotesk[wght].ttf
(Google Fonts, OFL). Pins are written to public/pins/<id>.jpg by default.
"""
import json
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = Path(sys.argv[1])
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "public" / "pins"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 1000, 1500
PHOTO_H = 1000
CREAM = (251, 249, 244)
INK = (31, 42, 28)
KALE = (60, 106, 53)
RADISH = (190, 0, 76)
PAD = 64

# Pull the recipe list from the site's own data so pins never drift from it.
recipes = json.loads(
    subprocess.check_output(
        [
            "node",
            "--input-type=module",
            "-e",
            "import { mealSalads, lighterSalads } from './src/data/salads.js';"
            "console.log(JSON.stringify([...mealSalads, ...lighterSalads].map(s => ({id: s.id, title: s.title, seoName: s.seoName, dressingName: s.dressingName}))))",
        ],
        cwd=ROOT,
    )
)


def font(name, size, weight=None):
    f = ImageFont.truetype(str(FONTS / name), size)
    if weight is not None:
        f.set_variation_by_axes([weight])
    return f


def tracked_width(draw, text, f, tracking):
    return sum(draw.textlength(ch, font=f) for ch in text) + tracking * (len(text) - 1)


def draw_tracked(draw, xy, text, f, fill, tracking):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += draw.textlength(ch, font=f) + tracking


def wrap(draw, text, f, max_width):
    words, lines, line = text.split(), [], ""
    for w in words:
        trial = (line + " " + w).strip()
        if draw.textlength(trial, font=f) <= max_width or not line:
            line = trial
        else:
            lines.append(line)
            line = w
    if line:
        lines.append(line)
    return lines


label_font = font("SpaceGrotesk[wght].ttf", 26, 600)
site_font = font("SpaceGrotesk[wght].ttf", 24, 500)

for r in recipes:
    pin = Image.new("RGB", (W, H), CREAM)
    photo = Image.open(ROOT / "public" / f"{r['id']}.jpg").convert("RGB")
    photo = photo.resize((W, PHOTO_H), Image.LANCZOS)
    pin.paste(photo, (0, 0))
    draw = ImageDraw.Draw(pin)

    # Pun title as a small tracked label in radish pink
    label = r["title"].upper()
    lf = label_font
    while tracked_width(draw, label, lf, 4) > W - 2 * PAD and lf.size > 18:
        lf = font("SpaceGrotesk[wght].ttf", lf.size - 2, 600)
    y = PHOTO_H + 56
    draw_tracked(draw, (PAD, y), label, lf, RADISH, 4)
    y += lf.size + 26

    # Plain-English dish name in Rufina Bold, sized to fit three lines
    size = 60
    while True:
        hf = font("Rufina-Bold.ttf", size)
        lines = wrap(draw, r["seoName"], hf, W - 2 * PAD)
        if len(lines) <= 3 or size <= 40:
            break
        size -= 4
    line_h = int(size * 1.18)
    for ln in lines:
        draw.text((PAD, y), ln, font=hf, fill=INK)
        y += line_h

    # Footer: thin kale rule and the site name
    rule_y = H - 96
    draw.line([(PAD, rule_y), (W - PAD, rule_y)], fill=KALE, width=2)
    draw_tracked(draw, (PAD, rule_y + 24), "NOTSOSIMPLESALADS.COM", site_font, KALE, 3)
    right = "HOMEMADE DRESSING"
    draw_tracked(draw, (W - PAD - tracked_width(draw, right, site_font, 3), rule_y + 24), right, site_font, KALE, 3)

    pin.save(OUT / f"{r['id']}.jpg", "JPEG", quality=86, optimize=True, progressive=True)

print(f"wrote {len(recipes)} pins to {OUT}")
