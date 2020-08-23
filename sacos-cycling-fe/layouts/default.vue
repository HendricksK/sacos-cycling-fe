<template>
  <div id="__layout">
    <title>{{title}}</title>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item p-0" :href="baseurl">
          <span class="material-icons">
            directions_bike
          </span>
        </a>
      </div>

      <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
          <!-- <a class="navbar-item" :href="abouturl">
            About
          </a> -->
        </div>
      </div>
    </nav>

    <Nuxt />
    
    <nav class="navbar is-fixed-bottom footer" role="navigation" aria-label="secondary navigation">
      <div class="navbar-brand">
        <!-- navbar items, navbar burger... -->
        <div class="description mx-3">built using <a href="https://github.com/HendricksK">github</a>, <a href="heroku.com/home">hreoku</a>, <a href="https://nuxtjs.org/">nuxt</a>, <a href="https://flask.palletsprojects.com/">flask</a> and <a href="https://versions.bulma.io/0.7.5/">bulma</a></div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        baseurl: process.env.baseUrl,
        abouturl: process.env.aboutUrl,
        title: process.env.title
      }  
    },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  }
</script>

