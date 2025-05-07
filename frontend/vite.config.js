import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure Vite binds to the correct network
    port: process.env.PORT || 3000, // Use Render's PORT variable
  }
})
