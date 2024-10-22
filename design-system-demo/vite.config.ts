import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'; // 型定義ファイルを生成するプラグイン
import path  from "path";
// import reactPlugin from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // reactPlugin(),
    react(),
    dts({ insertTypesEntry: true }) // 型定義ファイルのエントリーポイントを作成
  ],
  // GitHub Pages用のベースパス //効果ない？
  base: `${process.env.IMAGE_PATH_PREVIEW}`,
  // base: process.env.BUILD_ENV === 'preview' ?
  //   process.env.IMAGE_PATH_PREVIEW :
  //   process.env.IMAGE_PATH_DEV,
  build: {
    emptyOutDir: false, //出力ディレクトリをビルド毎にクリーンにすることができます
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // ライブラリのエントリーファイル
      name: 'mauDsUi', //scriptタグを使ってアクセスする場合の名称
      fileName: (format) => `mau-ds-ui.${format}.js`,
    },
    rollupOptions: {
      // ライブラリ化に必要な外部依存を指定
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
