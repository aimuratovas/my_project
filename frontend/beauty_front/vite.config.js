import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "/Users/aizirekmuratova/Desktop/personal project/backend/beauty_store/static",
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [react()],
})
