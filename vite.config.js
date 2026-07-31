import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// yoyoEu.github.io is a user-page repo, so the site is served from the domain root
export default defineConfig({
  plugins: [vue()],
  base: '/',
})
