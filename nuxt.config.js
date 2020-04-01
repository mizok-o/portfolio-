
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
      { rel:"stylesheet", href:"https://use.typekit.net/ita8kbu.css"}
    ],
    script: [
      { src: 'https://use.typekit.net/tiv6nbi.js' }
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
  modules: ["@nuxtjs/markdownit"],
  markdownit: {
    html: true,
    injected: true,
    preset: "default"
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
  '@nuxtjs/style-resources',
  '@nuxtjs/markdownit',
  '@nuxtjs/axios'
 ],
 markdownit: {
  html: true,
  injected: true,
  preset: 'default',
 },
 axios: {},
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
  build: {
     extend(config, ctx) {},
    vendor: [
      'vue-awesome-swiper'
    ]
}
}
