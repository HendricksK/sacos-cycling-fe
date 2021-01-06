import axios from 'axios'

let dynamicRoutes = () => {
 return axios.get('https://sacos-backend-go.herokuapp.com/articleids').then(res => {
   return res.data.map(article => `/article/${article.Id}`)
 })
}

export default {
  env: {
    //https://cycling.sacoshistory.org
    baseUrl: 'https://cycling.sacoshistory.org',
    apiUrl: 'https://sacos-backend-go.herokuapp.com',
    aboutUrl: 'about',
    articleUri: 'article',
    articleUrl: 'article/articles',
    pageUri: 'page',
    pageUrl: 'page/',
    title: 'sacos-cycling'
  },
  target: 'static',
  router: {
    base: '/'
  },
  generate: {
    // https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/
    routes: dynamicRoutes
  },
  head: {
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-176051888-1'
      },
      {
        src: 'ga.js' //local google analytics call, static call for JS is actually not that great.
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@creativebulma/bulma-collapsible@1.0.3/dist/js/bulma-collapsible.min.js'
      }
    ],
    meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
    link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@creativebulma/bulma-collapsible@1.0.3/dist/css/bulma-collapsible.min.css'
        }
      ]
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

