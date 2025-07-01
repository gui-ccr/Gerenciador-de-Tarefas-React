import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Gerenciador-de-Tarefas-React/",
  plugins: [react()],
})