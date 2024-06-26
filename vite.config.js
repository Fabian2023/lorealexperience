import { defineConfig } from 'vite'
import { copy } from "vite-plugin-copy";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'src/serviceWorker.js', dest: 'dist' }
      ]
    })
  ],
  build: {
    outDir: 'dist'
  }
})
