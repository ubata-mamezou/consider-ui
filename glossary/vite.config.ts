// import react from '@vitejs/plugin-react-swc'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// import {resolve} from 'node:path'
// import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // fs: {
    //   cachedChecks: false
    // },
    // hmr: {
    //   overlay: false
    // },
  },
  root: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      // '@/mau-ds-ui': path.resolve(__dirname, "src/lib/mau-ds-ui"),
      // {"mau-ds-ui": path.resolve(__dirname, "src/lib/mau-ds-ui")},
      //      {"mau-ds-ui": `${__dirname}/src/lib/mau-ds-ui`},
      // find: "mau-ds-ui", replacement: resolve(__dirname, "src/lib/mau-ds-ui"),
    }
  },
  publicDir: "./public",
})
