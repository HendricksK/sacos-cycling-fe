<template>
  <div class="container" id="rider">
    <p v-if="$fetchState.pending">Fetching home</p>
    <p v-else-if="$fetchState.error">An error occured</p>


	<div class="columns">
	  <div class="column is-one-third">
	  	<section class="section" id="bio">
	  		<figure class="image">
	            <img :src="rider.Bio.image">
	        </figure>
	        <div class="rider-bio">
		  		<span>Name: {{ rider.Name }}</span>
		  		<span>Clubs: </span>
		  		<span>Wins: </span>
		  		<span>Records: </span>
		  	</div>
	  	</section>
	  	

	  </div>
	  <div class="column is-two-third">
	  	<section class="section" id="content">
	  		<div class="rider-info">
		  		<p>{{ rider.Bio.information }}</p>
		  	</div>
	    </section>
	    <section class="section columns" id="riders">
	        <div class="column is-12">
	          <div class="gallery-list container">
	          	<!-- <div  v-for="rider of riders" class="tile is-2 rider-container"> -->
	              <div class="tile is-2 rider-container">

	                  <figure class="image">
	                    <!-- <img :src="rider.Image.image"> -->
	                  </figure>
	              </div>
	          </div>
	        </div>
	    </section>
	  </div>

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
        baseurl: process.env.baseUrl,
        rider: {}
      }
    },
    async fetch() {
    	var rider
        rider = await fetch (
	        process.env.apiUrl + process.env.riderUri + `/${this.$route.params.id}`
	    ).then(
	        res => res.json()
	    )

		this.rider = rider
		this.rider.Bio = JSON.parse(rider.Rider_data)
		console.log(this.rider)

    },
    methods: {
      refresh() {
        this.$fetch()
      }
    }
  }
</script>