require('dotenv').config()

export default {
  // when SPA
  loading: '@/components/shared/Loading.vue',

  // When SSR
  loadingIndicator: {
    name: 'three-bounce'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-boilerplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    // TODO: Remove this function when tailwindcss-module adds support to v3
    function () {
      this.nuxt.hook('tailwindcss:config', (config) => {
        // Move the legacy purge content array to the the new property
        // https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
        config.content = config.purge.content
        // Remove legacy purge option to disable the warning
        config.purge = undefined
      })
    }
  ],

  modules: [
  ],

  build: {
  }
}
