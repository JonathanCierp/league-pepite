import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap' },
    ]
  },
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/main.css',
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js")
    }
  }
})
