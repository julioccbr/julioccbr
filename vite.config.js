import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        elo: resolve(__dirname, 'elo-b2b-partner-portal.html'),
        fintech: resolve(__dirname, 'fintech-case-study.html'),
      },
    },
  },
})
