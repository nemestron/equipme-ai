import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimization: Use ES2020 to avoid legacy polyfills
    target: 'es2020',
    // Optimization: Minify with esbuild (faster/smaller than terser)
    minify: 'esbuild',
    // Optimization: CSS Code Splitting
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // STRATEGY: Vendor Chunk Splitting
        // Forces libraries into their own cacheable files
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-ui': ['lucide-react'],
          'vendor-ai': ['@google/generative-ai'],
        },
      },
    },
  },
})
