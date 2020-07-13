import colors from 'vuetify/es5/util/colors'
import { Configuration } from '@nuxt/types'

const config: Configuration = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  // add
  // srcDir: 'src',


  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  server: {
    port: 3000, // デフォルト: 3000
    // host: '0.0.0.0', // デフォルト: localhost
  },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" },
      // { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    // '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/variables.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: 'plugins/vuetify', ssr: false},
    // '@/plugins/fontawesome',
    // { src: 'plugins/registerSW.js'},
    '@/plugins/axios-accessor',
    '@/plugins/myPlugin',
    '@/plugins/myConst',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  loaders: {
    ts: {
      silent: true,
    },
    tsx: {
      silent: true,
    },
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
    ['@nuxtjs/pwa', { icon: false }],
    // '@nuxtjs/dotenv',
    // '@nuxtjs/auth',
  ],
  // oneSignal: {
  //   init: {
  //     appId: 'One Signalコンソールで発行したID',
  //     allowLocalhostAsSecureOrigin: true, // localhostで動作確認する場合true
  //     welcomeNotification: {
  //       disable: true
  //     },
  //   },
  //   importScripts: ['sw.js'], // 後述、必須
  // },

  workbox: {
  //     // キャッシュの設定
  //     // dev: true, //開発環境でもPWAできるように
    swDest: 'static/sw.js',
  //     // skipWaiting: true,
  //     // clientsClaim: true,
  //     // runtimeCaching: [
  //     //   {
  //     //     // APIから取得した結果
  //     //     urlPattern: '/api/xxxx/.*',
  //     //     handler: 'cacheFirst',
  //     //     method: 'GET',
  //     //     strategyOptions: {
  //     //       cacheExpiration: {
  //     //         maxAgeSeconds: 60 * 60 * 24, // 1日
  //     //       },
  //     //       cacheableResponse: {
  //     //         statuses: [200],
  //     //       },
  //     //     },
  //     //   },
  //     // ],
  },
  manifest: {
    name: 'nuxt-app',
    // short_name: 'nuxt-PWA',
    // title: 'nuxt-title',
    lang: 'ja',
    display: 'standalone',

    // start_url: 'index.html',
    // start_url: '/dev',
    // start_url: '/?mode=pwa',   // アイコンから起動した時のURL

    // プッシュ通知用
    // gcm_sender_id: 'XXX',  // Push7の設定を追記
    // gcm_user_visible_only: true,     // Push7の設定を追記

    // theme_color: '#ff4a93', // アプリケーションの既定のテーマ色を定義
    // background_color: '#ffdce6', // 背景の色
    // icons: [
    //   {
    //     src: '/images/logo512.png',
    //     sizes: '512x512',
    //     type: 'image/png'
    //   }
    // ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // proxy: true,
    // baseURL: "http://localhost:8000/api"
    // baseURL: "http://127.0.0.1:49588/api"
    // baseURL: 'http://django:8000',
    // browserBaseURL: 'http://localhost:8000'
  },
  proxy: {
    // '/api': 'http://api:5432',
  },
  // watchers: {
  //   webpack: {
  //     poll: true
  //   }
  // },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  router: {
    middleware: [
      'route-log',
    ],
  }
}
export default config
