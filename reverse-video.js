import ffmpeg from 'ffmpeg-static';
import { execSync } from 'child_process';
import fs from 'fs';

console.log("Locating static ffmpeg binary: ", ffmpeg);

const input = 'public/bacon-me-crazy-video.mp4';
const output = 'public/bacon-me-crazy-video-boomerang.mp4';

// Create a seamless boomerang loop by playing forward, then backward
// -filter_complex "[0:v]reverse[r];[0:v][r]concat=n=2:v=1[outv]"
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
