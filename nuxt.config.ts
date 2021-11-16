import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    meta: [
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'format-detection', content: 'telephone=no' },
      { charset: 'utf-8' },
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { 'http-equiv': 'expires', content: '0' },
      { content: 'telephone=no', name: 'format-detection' },
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://leaguepepite.com/' },
      { property: 'og:title', content: 'Présentation | League PEPITE' },
      { property: 'og:description', content: process.env.npm_package_description || '' },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://leaguepepite.com/' },
      { property: 'twitter:title', content: 'Présentation | League PEPITE' },
      { property: 'twitter:description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'canonical', href: 'https://leaguepepite.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap' },
    ],
    script: [
      {
        hid: 'gtm-script1',
        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`,
        defer: true
      },
      {
        hid: 'gtm-script2',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
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
