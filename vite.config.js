import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Every route is pre-rendered to its own HTML file (see scripts/prerender.mjs),
  // so the dev/preview server should not fall back to index.html.
  appType: 'mpa',
})
