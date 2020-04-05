import dotenv from 'dotenv'

dotenv.config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'KnowCOVID-19',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Latest updates, myths busters, Fake news tracker for Covid-19'
      }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/front-only', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // '@nuxtjs/proxy',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: './assets/scss/variables.scss'
  },
  router: {
    linkExactActiveClass: 'active-link'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // retry: { retries: 2 },
    // proxy: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
      'Access-Control-Allow-Credentials': 'true'
    },
    baseURL: process.env.BASE_URL || 'https://knowcovid19-backend.now.sh/v1'
  },
  // proxy: {
  //   '/api/': {
  //     target: `${process.env.BASE_URL}/`,
  //     pathRewrite: { '^/api/': '' }
  //     changeOrigin: true
  //   }
  // },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
