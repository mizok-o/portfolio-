export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css?family=Cormorant&display=swap" ,rel: "stylesheet"}

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  '@nuxtjs/style-resources'
 ],
 styleResources: {
  sass: [
   '@/assets/sass/_mixin.sass',
   '@/assets/sass/_user-style.sass'
  ],
  scss: [
   '@/assets/scss/_variable.scss',
   '@/assets/scss/_mixin.scss'
  ],
  stylus: [
   '@/assets/stylus/layout.styl'
  ]
},
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-awesome-swiper'
    ],
    /*
    ** You can extend webpack config here
  //   */
  //   extend (config, ctx) {
  //     config.module.rules.push({
  //   test: /\.coffee$/,
  //   use: 'coffee-loader',
  //   exclude: /(node_modules)/
  // })
  //   }
  }
}
