<template>
  	<div>
  		<p v-if="$fetchState.pending">Fetching articles</p>
		  <p v-else-if="$fetchState.error">An error occured</p>
  		<br>
        
  		<h1>Tracks</h1>
	    <ul>
	      	<li v-for="track of tracks">
	      		<a :href="trackuri+'/'+track.Id">{{ track.Name }}</a>
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
    		trackuri: process.env.trackUri,
    		tracks: []
    	}
    },
    async fetch() {
    	this.articles = await fetch(
    		process.env.apiUrl+'/tracks'
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
