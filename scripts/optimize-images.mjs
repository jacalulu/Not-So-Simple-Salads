// Generate responsive WebP variants for every recipe photo in public/.
// Run with `npm run images` after adding or replacing a photo.
// Output: public/img/<name>-{480,800,1024}.webp (only when missing or stale).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const pub = path.resolve('public');
const out = path.join(pub, 'img');
const widths = [480, 800, 1024];
const quality = 78;
fs.mkdirSync(out, { recursive: true });

const sources = fs
  .readdirSync(pub)
  .filter((f) => /\.jpg$/i.test(f) && !/_thumb|-poster|hero-poster/.test(f));

let made = 0;
for (const file of sources) {
  const src = path.join(pub, file);
  const name = file.replace(/\.jpg$/i, '');
  const srcTime = fs.statSync(src).mtimeMs;
  for (const w of widths) {
    const dest = path.join(out, `${name}-${w}.webp`);
    if (fs.existsSync(dest) && fs.statSync(dest).mtimeMs > srcTime) continue;
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality }).toFile(dest);
    made++;
  }
}
const total = fs.readdirSync(out).reduce((a, f) => a + fs.statSync(path.join(out, f)).size, 0);
console.log(`${sources.length} photos → ${made} new variants, ${Math.round(total / 1024)} KB total in public/img`);
