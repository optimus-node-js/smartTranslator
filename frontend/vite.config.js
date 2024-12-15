import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 4000, // Optional: Local development port
    },
    build: {
        outDir: 'dist', // Output directory for Vercel build
    }
});
