<template>
  	<div>
        <p v-if="$fetchState.pending">Fetching article</p>
        <p v-else-if="$fetchState.error">An error occured</p>
        <div class="container">
            <section class="section" v-if="article">
                <h1>{{article.Name}}</h1>
                <br>
                <p class="article-display">{{article.Article_data}}</p>
                <br> 
                <a :href="article.Url">Original article</a>   
            </section>
        </div>
  	</div>
</template>

<script>
  export default {
    layout(context) {
        return 'default'
    },
    data() {
    	return {
    		article: null 
    	}
    },
    async fetch() {
        // This is was so helpful https://codesandbox.io/s/github/mercs600/nuxt-ssr-guide/tree/master/?fontsize=14&hidenavigation=1&initialpath=/fetch-blog&module=/pages/fetch-blog/index.vue&theme=dark&file=/pages/fetch-blog/_id.vue
        // this.$route.params.id was the key
    	this.article = await fetch(
    		process.env.apiUrl+`/article/${this.$route.params.id}`
    	).then(
    		res => res.json()
    	)

        console.log(this.article.Name)
        console.log(this.article.Article_data)
    },
    methods: {
    	refresh() {
    		this.$fetch()
    	}
    }
  }
</script>
