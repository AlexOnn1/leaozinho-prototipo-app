import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/leaozinho-prototipo-app/', // Coloque o nome exato do seu repositório aqui
})