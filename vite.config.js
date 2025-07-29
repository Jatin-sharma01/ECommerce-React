import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ECommerce-React/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
