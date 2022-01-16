import { client } from './utils/microcms';
const { GET_API_KEY, SERVICE_DOMAIN } = process.env;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MUKAIBI',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '静岡を拠点にWeb制作を手掛けているMUKAIBIのWebサイトです。' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://mukaibi.com' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'MUKAIBI' },
      { hid: 'og:title', property: 'og:title', content: 'MUKAIBI' },
      { hid: 'og:description', property: 'og:description', content: '静岡を拠点にWeb制作を手掛けているMUKAIBIのWebサイトです。' },
      { hid: 'og:image', property: 'og:image', content: '/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '_mukaibi' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/base.scss',
    '~/assets/scss/global.scss',
    'material-icons/iconfont/material-icons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/script.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
    '@nuxtjs/google-analytics',
  ],

  styleResources: {
    scss: ['~/assets/scss/app.scss'],
    hoistUseStatements: true,
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader',
    'nuxt-microcms-module',
    '@nuxtjs/sitemap',
  ],

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.GET_API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  webfontloader: {
    google: {
      families: ['Marcellus', 'Shippori+Mincho:wght@400;700&display=swap'],
    },
  },

  sitemap: {
    hostname: 'https://mukaibi.com',
    gzip: true,
    routes: [
      '/works/nozomibar-first-anniversary-goods',
      '/works/nozopico/',
      '/works/nicodosai-11th/',
      '/works/nicodosai-10th/',
      '/works/nicodosai-9th/',
      '/works/nozomicoaching/',
      '/works/rainbow/',
      '/works/nicodosai-8th/',
      '/works/rwd-2016/',
      '/works/mukaibi/',
    ],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'page',
      }),
      routes.push({
        path: '/category/:categoryId/page/:id',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'categories',
      });
    },
  },

  generate: {
    async routes() {
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i);
      const limit = 10;

      // 一覧のページング
      const pages = await client
        .get({
          endpoint: 'works',
          queries: {
            limit: 0,
          },
        })
        .then((res) =>
          range(1, Math.ceil(res.totalCount / 10)).map((p) => ({
            route: `/page/${p}`,
          }))
        );

      return [
        ...pages,
      ];
    },
    dir: 'dist',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
