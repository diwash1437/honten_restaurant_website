import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/honten_restaurant_website/', // <-- Add this line
// The reason for the blank page: 
// Vite uses absolute paths by default (/) for JS/CSS files.
//  GitHub Pages hosts it under /honten_restaurant_website/, 
// so it can't find your scripts and styles, leading to a blank page.

})
