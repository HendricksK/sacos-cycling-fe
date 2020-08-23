export default {
  env: {
    baseUrl: process.env.BASE_URL || 'https://hendricksk.github.io/sacos-cycling-fe/',
    aboutUrl: 'about',
    title: 'sacos-cycling'
  },
  target: 'static',
  router: {
    base: '/sacos-cycling-fe/'
  },
   modules: [
    '@nuxt/http',
  ],
  http: {
    // proxyHeaders: false
  },
  css: [
    '@/assets/css/bulma.css', // Adding bulma
    '@/assets/css/base.css', //base css, will be replaced with bulma eeventually
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-176051888-1'
    }]
  ]
}

