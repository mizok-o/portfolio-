

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  '@nuxtjs/markdownit'
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
generate: {
    routes() {
      const careers = axios
        .get("https://your.microcms.io/api/v1/careers", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(career => {
            return "/careers/" + career.id;
          });
        });
      const posts = axios
        .get("https://your.microcms.io/api/v1/posts", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(post => {
            return "/careers/posts/" + post.id;
          });
        });
      return Promise.all([careers, posts]).then(values => {
        return values.join().split(",");
      });
    }
  },
  performance: {
    maxEntrypointSize: 400000
  },
  /*
   ** Build configuration
   */
  build: {
     extend(config, ctx) {},
    vendor: [
      'vue-awesome-swiper'
    ],
}
}
