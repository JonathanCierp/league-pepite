import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap' },
    ]
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
    '~/assets/css/animation.css',
    '~/assets/css/v-tooltip.css',
    '~/assets/css/v-datepicker.css'
  ],
  publicRuntimeConfig: {
    BASE_API_URL: process.env.BASE_API_URL,
    API_URL: process.env.API_URL,
    DOMAIN: process.env.DOMAIN,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    JWT_ISS: process.env.JWT_ISS
  },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js")
    }
  }
})
