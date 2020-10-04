<template>
  	<div>
  		<p v-if="$fetchState.pending">Fetching articles</p>
		  <p v-else-if="$fetchState.error">An error occured</p>
  		<br>
        
  		<h1>Articles</h1>
	    <ul>
	      	<li v-for="article of articles">
	      		<a :href="baseurl+'/'+articleuri+'/'+article.Id">{{ article.Name }} - {{article.Author}}</a>
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
    		process.env.apiUrl+'/articles'
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
