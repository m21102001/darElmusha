import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/warehouse/home',
  server: {
    // host: '192.168.0.104',
    // host: '10.0.0.91',

    // port: '3000'
  }

})

