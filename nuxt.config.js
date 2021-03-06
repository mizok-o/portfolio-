export default {
  mode: 'universal',
  pageTransition: 'page',
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
  loading: { color: '#fff' },

  css: [
    'swiper/dist/css/swiper.min.css'
  ],
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false },
    { src: '~plugins/mixin' }
  ],

  buildModules: [
  ],
  markdownit: {
    html: true,
    injected: true,
    preset: "default"
  },
  modules: [
  '@nuxtjs/style-resources',
  '@nuxtjs/markdownit',
  '@nuxtjs/axios',
  'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Cinzel']
    }
  },
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
     transpile: ['gsap'],
    vendor: [
      'vue-awesome-swiper'
    ]
  },
  generate: {
    fallback: true
  }
}
