export default {
  server: {
    host: process.env.HOST,
    port: process.env.PORT
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'League Pepite',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
      { property: 'og:title', content: 'Présentation | League Pépite' },
      { property: 'og:description', content: process.env.npm_package_description || '' },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://leaguepepite.com/' },
      { property: 'twitter:title', content: 'Présentation | League Pépite' },
      { property: 'twitter:description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'canonical', href: 'https://leaguepepite.com' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap' },
    ],
    __dangerouslyDisableSanitizers: ['script'],
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL
  },

  // Robots module configuration: https://www.npmjs.com/package/@nuxtjs/robots
  robots: {
    UserAgent: '*'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
