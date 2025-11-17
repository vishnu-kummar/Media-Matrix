// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })





// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // ⬅️ 1. Import the 'path' module

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 2. Add the resolve block to configure the alias
  resolve: {
    alias: {
      // Set '@' to point directly to the 'src' directory
      '@': path.resolve(__dirname, './src'), 
    },
  },
})
