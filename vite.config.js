import { fileURLToPath, URL } from 'node:url'
import { config } from 'dotenv'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

config();

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env':process.env
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
