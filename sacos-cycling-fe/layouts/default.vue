<template>
  <div>
    <Nuxt />
    <footer class="footer">
      <div class="description">built using <a href="https://github.com/HendricksK">github</a>, <a href="heroku.com/home">hreoku</a>, <a href="https://nuxtjs.org/">nuxt</a> and <a href="https://flask.palletsprojects.com/">flask</a></div>
    </footer>
  </div>
</template>

<script>
  export default {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://raw.githubusercontent.com/jgthms/bulma/master/css/bulma.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://raw.githubusercontent.com/HendricksK/sacos-cycling-fe/master/sacos-cycling-fe/assets/base.css',
        }
      ],
    }
}

</script>

