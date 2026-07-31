import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// my-resume is a project-page repo, served at https://<user>.github.io/my-resume/
export default defineConfig({
  plugins: [vue()],
  base: '/my-resume/',
})
