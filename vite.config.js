import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        elo: resolve(__dirname, 'elo-b2b-partner-portal.html'),
        paguemenos: resolve(__dirname, 'pague-menos-clube.html'),
        ifood: resolve(__dirname, 'ifood-utilities.html'),
        superagents: resolve(__dirname, 'superagents.html'),
        eloexcel: resolve(__dirname, 'elo-excel-plugin.html'),
        decolar: resolve(__dirname, 'decolar-travel-assistant.html'),
      },
    },
  },
})
