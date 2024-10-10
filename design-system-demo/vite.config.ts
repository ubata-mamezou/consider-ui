import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages用のベースパス
  base: process.env.IMAGE_PATH_PREVIEW,
  // base: process.env.BUILD_ENV === 'preview' ?
  //   process.env.IMAGE_PATH_PREVIEW :
  //   process.env.IMAGE_PATH_DEV,
})
