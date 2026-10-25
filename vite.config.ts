import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // 相对基路径：自定义域名与 github.io 子路径下都能正常加载资源
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2022',
    cssMinify: 'lightningcss',
  },
})
