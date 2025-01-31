import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   modules: {
  //     generateScopedName: "[local]__[hash:base64:5]", // Opcjonalnie: zmienia nazewnictwo klas
  //   },
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/styles/variables.scss";` // Automatyczne importowanie zmiennych
  //     }
  //   }
  // }
  // resolve: {
  //   alias: {
  //     '@assets': path.resolve(__dirname, '../../common-assets')
  //   }
  // },
  // server: {
  //   fs: {
  //     allow: ['../../common-assets'] // Pozwala na dostęp do katalogu common-assets
  //   }
  // }
})
