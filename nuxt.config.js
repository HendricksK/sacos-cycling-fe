import axios from 'axios'

export default {
  env: {
    //https://cycling.sacoshistory.org
    title: 'Sacos Cycling',
    baseUrl: 'https://cycling.sacoshistory.org',
    apiUrl: 'https://sacos-backend-go.herokuapp.com',
    aboutUrl: '/about',
    articleUri: '/article',
    articleUrl: '/articles',
    pageUri: '/page',
    pageUrl: '/page',
    postUri: '/post',
    postUrl: '/posts',
    trackUri: '/track',
    trackUrl: '/tracks',
    riderUri: '/rider',
    riderUrl: '/riders',
    title: 'Sacos Cycling'
  },
  target: 'static',
  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'article',
        path: '/article/:id?',
        component: 'pages/article/_id.vue'
      },
      {
        name: 'rider',
        path: '/rider/:id?',
        component: 'pages/rider/_id.vue'
      },
    ]
  },
  generate: {
      routes: function () {
            let articleids = () => { 
               return axios.get('https://sacos-backend-go.herokuapp.com/articleids').then(res => {
                 return res.data.map(article => `/article/${article.Id}`)
               })
             }
            let riderids = () => { 
               return axios.get(apiUrl + '/riderids').then(res => {
                 return res.data.map(article => `/rider/${rider.Id}`)
               })
             }
            return Promise.all([articleids, riderids]).then(values => {
                return values.join().split(',');
            })
        },
        fallback: "404.html"
  },
  head: {
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-176051888-1'
      },
      {
        src: 'https://cycling.sacoshistory.org/ga.js' //local google analytics call, static call for JS is actually not that great.
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

