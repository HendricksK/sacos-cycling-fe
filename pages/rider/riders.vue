<template>
    <div>
      <p v-if="$fetchState.pending">Fetching riders</p>
      <p v-else-if="$fetchState.error">An error occured</p>
      <br>
      <div class="container">
      <section class="section" id="heading">  
        <h1 class="title">Riders</h1>
      </section>
      <section class="section columns" id="riders">
        <div class="column is-12">
          <div class="gallery-list container">
              <div v-for="rider of riders" class="tile is-2 rider-container">
                <a :href="rideruri + '/' + rider.Id + '?rider=' + rider.Url">
                  <figure class="image">
                    <img :src="rider.Image.image">
                  </figure>
                  {{ rider.Name }}
                </a>
              </div>
          </div>
        </div>
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
        baseurl: process.env.baseUrl,
        rideruri: process.env.riderUri,
        riders: []
      }
    },
    async fetch() {

      var riders = await fetch (
        process.env.apiUrl + process.env.riderUrl
      ).then(
        res => res.json()
      )

      for (var i = 0; i < riders.length; i++) {
        var rider = riders[i]
        rider.Image = JSON.parse(rider.Rider_data)
        rider.Url = rider.Name.replace(/ /g, '%20')
        this.riders.push(rider)
      }
    },
    methods: {
      refresh() {
        this.$fetch()
      }
    }
  }
</script>
