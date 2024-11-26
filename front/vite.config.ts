import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

console.log(path.resolve(__dirname, '../../.env'));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
      },
      external: [/\.spec\.ts$/, /\.spec\.tsx$/, /tests/, /test/],
    }
  }
});
