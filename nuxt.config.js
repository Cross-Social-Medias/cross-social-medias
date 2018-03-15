const { generateRoutes } = require('./utils/router');
require('dotenv').config();

module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    serverUrl: process.env.SERVER_URL || 'http://localhost:4000' 
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Proto cross social medias',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script:[
      {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
      {src:'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js'},
      {src:'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-i18n']
  },
  plugins: [
    '~api/index'
  ],
  serverMiddleware: [
    '~/routes/twitter_entry_point.js'
  ],
  router: {
    middleware: ['auth', 'i18n'],
    extendRoutes (routes) {
      const newRoutes = generateRoutes(routes)
      routes.splice(0, routes.length)
      routes.unshift(...newRoutes)
    }
  },
  plugins: ['~/plugins/i18n.js'],
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/dotenv',
  ],
  css: [
     '@/assets/css/main.css'
  ]
}
