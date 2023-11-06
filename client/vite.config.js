import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isDevEnv = false
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/morning': {
        target: !isDevEnv? "https://valerie3956morning.app" : 'http://127.0.0.1:9000',
        changeOrigin: true,
        secure: false,
      },
    },
    port: 5173,
  },
});

