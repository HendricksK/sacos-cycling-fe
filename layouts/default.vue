<template>
  <div id="__layout">
    <title>{{title}}</title>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item p-0" :href="baseurl">
          <span class="material-icons" style="color:#e3b602">
            directions_bike
          </span>
        </a>
        <a class="navbar-item" style="color:#e3b602" :href="articleurl">
            Articles
        </a>
        <a class="navbar-item" style="color:#e3b602" :href="abouturl">
            About
        </a>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        baseurl: process.env.baseUrl,
        abouturl: process.env.aboutUrl,
        articleurl: process.env.articleUri + process.env.articleUrl,
        title: process.env.title
      }  
    }
  }
</script>

