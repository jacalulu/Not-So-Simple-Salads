#!/usr/bin/env python3
"""One-time sync of src/data/salads.js to the printed v7 book (nsss-book/recipes.json):
- lineup: +burrata-ultimatum/fennel-countdown/radicchio-ga-ga, -caprese-edit/-zest-coast,
  bacon-me-crazy & couscous move to Meal Salads (printed order)
- per recipe: headnote/serves/time/manifesto synced to print, difficulty added
Run from the site repo root."""
import json, re, sys
from pathlib import Path

SITE = Path(__file__).resolve().parents[1]
BOOK = json.load(open("/Users/jaclynkonzelmann/Documents/nsss-book/recipes.json"))
book = {r["slug"]: r for r in BOOK}

src = open(SITE / "src/data/salads.js").read()

def split_items(body):
    items, depth, start = [], 0, None
    for i, ch in enumerate(body):
        if ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                items.append(body[start : i + 1])
    return items

m = re.search(r"export const mealSalads = \[(.*?)\n\];", src, re.S)
l = re.search(r"export const lighterSalads = \[(.*?)\n\];", src, re.S)
entries = {}
for blob in split_items(m.group(1)) + split_items(l.group(1)):
    eid = re.search(r"id: '([a-z-]+)'", blob).group(1)
    entries[eid] = blob

def js(s):
    return json.dumps(s, ensure_ascii=False)

def patch(eid, blob):
    b = book[eid]
    blob = re.sub(r'headnote: ".*?",\n', f'headnote: {js(b["headnote"])},\n', blob, count=1)
    blob = re.sub(r'manifestoQuote: ".*?",\n', f'manifestoQuote: {js(b["manifesto"])},\n', blob, count=1)
    blob = re.sub(r'serves: ".*?",', f'serves: {js(b["serves"])},', blob, count=1)
    blob = re.sub(r'time: ".*?",', f'time: {js(b["time"])},\n    difficulty: {js(b["difficulty"])},', blob, count=1)
    return blob

def ings(items):
    return ",\n".join(f"      {{ item: {js(i['item'])}, note: {js(i['note'])} }}" for i in items)

def dings(items):
    return ",\n".join(f"      {{ item: {js(i['qty'])}, name: {js(i['name'])} }}" for i in items)

def entry(eid, seoName, cuisine, salad_ings, dname, dslug, dseo, dmethod, d_ings):
    b = book[eid]
    return f"""{{
    id: '{eid}',
    title: {js(b["title"])},
    seoName: {js(seoName)},
    cuisine: '{cuisine}',
    serves: {js(b["serves"])},
    time: {js(b["time"])},
    difficulty: {js(b["difficulty"])},
    headnote: {js(b["headnote"])},
    manifestoQuote: {js(b["manifesto"])},
    saladIngredients: [
{ings(salad_ings)}
    ],
    dressingName: {js(dname)},
    dressingSlug: '{dslug}',
    dressingSeoName: {js(dseo)},
    dressingMethod: {js(dmethod)},
    dressingIngredients: [
{dings(d_ings)}
    ]
  }}"""

entries["burrata-ultimatum"] = entry(
    "burrata-ultimatum",
    "Heirloom Tomato & Burrata Salad with Soppressata",
    "Italian",
    [
        {"item": "Heirloom tomatoes", "note": "sliced thick"},
        {"item": "Burrata", "note": "1 ball"},
        {"item": "Spicy soppressata", "note": "thinly sliced"},
        {"item": "Castelvetrano olives", "note": "¼ cup, torn"},
        {"item": "Fresh basil", "note": "1 handful"},
    ],
    "No-Measure Dressing",
    "no-measure-dressing",
    "No-Measure Olive Oil & Balsamic Dressing",
    "Drizzle with the best olive oil you own, then the balsamic reduction. Finish with flaked sea salt and plenty of cracked black pepper.",
    [
        {"qty": "Generous pour", "name": "the best olive oil you own"},
        {"qty": "Drizzle", "name": "balsamic reduction (store-bought is fine)"},
        {"qty": "To taste", "name": "flaked sea salt"},
        {"qty": "Plenty", "name": "cracked black pepper"},
    ],
)

entries["fennel-countdown"] = entry(
    "fennel-countdown",
    "Shaved Fennel, Watermelon Radish & Blood Orange Salad",
    "Mediterranean",
    [
        {"item": "Fennel", "note": "1 bulb, shaved thin"},
        {"item": "Watermelon radish", "note": "1, sliced into thin rounds"},
        {"item": "Blood oranges", "note": "2, segmented"},
        {"item": "Marcona almonds", "note": "⅓ cup, roughly chopped"},
    ],
    "Sumac Vinaigrette",
    "sumac-vinaigrette",
    "Sumac Vinaigrette with Lemon & Honey",
    "Whisk everything together, including any blood orange juice caught while segmenting. It keeps, fully prepped, for days — shake hard to re-emulsify before pouring.",
    [
        {"qty": "3 Tbsp", "name": "extra-virgin olive oil"},
        {"qty": "2 Tbsp", "name": "fresh lemon juice"},
        {"qty": "1 tsp", "name": "red wine vinegar"},
        {"qty": "1 tsp", "name": "sumac"},
        {"qty": "1 tsp", "name": "honey"},
        {"qty": "¼ tsp", "name": "kosher salt"},
        {"qty": "To taste", "name": "freshly ground black pepper"},
    ],
)

entries["radicchio-ga-ga"] = entry(
    "radicchio-ga-ga",
    "Radicchio, Apple & Walnut Salad with Lemon-Dijon Vinaigrette",
    "Italian",
    [
        {"item": "Radicchio", "note": "1 small head, sliced into ribbons"},
        {"item": "Arugula", "note": "3 cups, loosely packed"},
        {"item": "Crisp apple or firm-ripe pear", "note": "1, thinly sliced"},
        {"item": "Fennel", "note": "½ bulb, very thinly shaved"},
        {"item": "Walnuts", "note": "⅓ cup, toasted & chopped"},
        {"item": "Parmesan", "note": "⅓ cup, shaved"},
    ],
    "Lemon-Dijon Vinaigrette",
    "lemon-dijon-honey-vinaigrette",  # 'lemon-dijon-vinaigrette' is taken by the Niçoise
    "Lemon-Dijon Vinaigrette with Honey & Lemon Zest",
    "Whisk everything together until emulsified. Taste — a little more honey balances the lemon against the bitter greens.",
    [
        {"qty": "3 Tbsp", "name": "extra-virgin olive oil"},
        {"qty": "1½ Tbsp", "name": "fresh lemon juice"},
        {"qty": "1 tsp", "name": "Dijon mustard"},
        {"qty": "1 tsp", "name": "honey or maple syrup"},
        {"qty": "½ tsp", "name": "finely grated lemon zest"},
        {"qty": "¼ tsp", "name": "kosher salt"},
        {"qty": "To taste", "name": "freshly ground black pepper"},
    ],
)

MEAL = ["cauli-fornia-dreamin", "noodle-me-this", "banh-mi-over", "keep-cobb-and-carry-on",
        "thaid-and-true", "nicoise-to-meet-you", "romaine-calm", "winner-winner-wonton",
        "greek-expectations", "thai-me-a-river", "salmon-situation", "packn-pasta",
        "bacon-me-crazy", "couscous"]
LIGHTER = ["salad-days", "burrata-ultimatum", "water-fire-feta", "fennel-countdown",
           "radicchio-ga-ga"]

for eid in MEAL + LIGHTER:
    entries[eid] = patch(eid, entries[eid])

def emit(ids):
    return ",\n  ".join(entries[i].strip() for i in ids)

out = f"""// Complete Salad Data Store
// Synced to the printed v7 cookbook (lineup, headnotes, manifestos, difficulty).

export const mealSalads = [
  {emit(MEAL)}
];

export const lighterSalads = [
  {emit(LIGHTER)}
];
"""
open(SITE / "src/data/salads.js", "w").write(out)
print(f"mealSalads: {len(MEAL)}, lighterSalads: {len(LIGHTER)}")
