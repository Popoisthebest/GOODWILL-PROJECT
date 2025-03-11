import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from "path"; // ✅ path 모듈 사용


// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
      jsxImportSource: "@emotion/react",
  }), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ @를 src 폴더로 설정
    },
  },
});
