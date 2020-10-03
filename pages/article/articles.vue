<template>
  	<div>
  		<p v-if="$fetchState.pending">Fetching articles</p>
		  <p v-else-if="$fetchState.error">An error occured</p>
  		<br>
  		<h1>Nuxt Mountains</h1>
	    <ul>
	      	<li v-for="article of articles">
	      		<a :href="baseurl+'/'+articleuri+'/'+article.Id">{{ article.Name }}</a>
	      	</li>
	    </ul>
  	</div>
</template>

<script>
  export default {
    layout(context) {
        return 'default'
    },
    data() {
    	return {
    		baseurl: process.env.baseUrl,
    		articleuri: process.env.articleUri,
    		articles: []
    	}
    },
    async fetch() {
    	this.articles = await fetch(
    		'http://localhost:6660/articles'
    	).then(
    		res => res.json()
    	)
    },
    methods: {
    	refresh() {
    		this.$fetch()
    	}
    }
  }
</script>
