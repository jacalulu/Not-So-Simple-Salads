import ffmpeg from 'ffmpeg-static';
import { execSync } from 'child_process';

const input = 'public/thaid-and-true-video.mp4';
const output = 'public/thaid-and-true-video-poster.jpg';

const cmd = `"${ffmpeg}" -y -i "${input}" -vframes 1 -q:v 2 "${output}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log("Successfully extracted first frame as poster.");
} catch (e) {
  console.error("FFmpeg frame extraction failed:", e);
}
