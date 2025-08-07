import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/Noy/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // เปิดให้ IP ภายนอกเข้าถึงได้
    port: 5173,
    strictPort: true, // ใช้ port นี้เท่านั้น
  },
  preview: {
    host: '0.0.0.0', // สำหรับ npm run preview
    port: 4173,
  },
  build: {
    outDir: 'dist',
  }
})