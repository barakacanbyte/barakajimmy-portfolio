import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use '/' for Netlify (root deploy). Set VITE_BASE_PATH for GitHub Pages.
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
