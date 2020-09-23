export default {
  env: {
    baseUrl: process.env.BASE_URL || 'https://hendricksk.github.io/sacos-cycling-fe/',
    aboutUrl: 'about',
    title: 'sacos-cycling'
  },
  target: 'static',
  router: {
    base: '/'
  },
   modules: [
    '@nuxt/http'
  ],
  http: {
    // proxyHeaders: false
  },
  css: [
    '@/assets/css/bulma.css', // Adding bulma
    '@/assets/css/base.css', //base css, will be replaced with bulma eeventually
    '@/assets/css/overrides.css', //overrides css, will override base and bulma
  ],
  plugins: [
    { 
      src: '~plugins/ga.js',
      mode: 'client' 
    }
  ]
}

