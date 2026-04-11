import ffmpeg from 'ffmpeg-static';
import { execSync } from 'child_process';
import fs from 'fs';

console.log("Locating static ffmpeg binary: ", ffmpeg);

const input = 'public/thaid-and-true-video.mp4';
const output = 'public/thaid-and-true-video-boomerang.mp4';

const cmd = `"${ffmpeg}" -y -i "${input}" -filter_complex "[0:v]reverse[r];[0:v][r]concat=n=2:v=1[outv]" -map "[outv]" -pix_fmt yuv420p -an "${output}"`;

console.log("Executing FFmpeg boomerang pipeline...");
try {
  execSync(cmd, { stdio: 'inherit' });
  console.log("Boomerang compiled perfectly! Overwriting source...");
  fs.renameSync(output, input);
  console.log("Done.");
} catch (e) {
  console.error("FFmpeg execution failed:", e);
}
