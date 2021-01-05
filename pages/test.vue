<template>
    <div class="container" id="home">
        <p v-if="$fetchState.pending">Fetching home</p>
        <p v-else-if="$fetchState.error">An error occured</p> 

        <section class="section">
          <h1 class="title">
                {{ heading.heading }}
          </h1>
        </section>
        <section class="section">  
              <div class="container">
                <h1 class="title"></h1>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-12">
                        <div class="tile">

                          <div v-for="banner of banner.banner" class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-info">
                              <figure class="image">
                                <img v-bind:src="{{banner.img_url}}">
                              </figure>

                              <div v-if="banner.image.collapsable" class="accordion">
                                <div class="col">
                                  <div class="tabs">
                                    <div class="tab">
                                      <input type="checkbox" id="chck1">
                                      <label class="tab-label" for="chck1">Basil Williams</label>
                                      <div class="tab-content">
                                        {{banner.data}}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p v-else class="subtitle">{{banner.data}}</p>

                            </article>
                          </div>

                          <!-- <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-info">
                              <figure class="image">
                                <img src="https://github.com/HendricksK/sacos_images/blob/master/Mark%20Hendricks%20Winning%20Last%20Stage%20of%20Tour%20de%20Boland.jpg?raw=true">
                              </figure>
                              <p class="subtitle">Mark Hendricks Winning Last Stage of Tour de Boland</p>
                            </article>
                          </div> -->


                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="content" v-html="content.content"></div>
            
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
        page: {},
        heading: {},
        banner: {},
        content: {}
      }
    },
    async fetch() {
      
      var heading, banner, content

      heading = await fetch(
        process.env.apiUrl + '/' + process.env.postUrl + '1' + '/heading' 
      ).then(
        res => res.json()
      ),
      banner = await fetch(
        process.env.apiUrl + '/' + process.env.postUrl + '1' + '/banner' 
      ).then(
        res => res.json()
      ),
      content = await fetch(
        process.env.apiUrl + '/' + process.env.postUrl + '1' + '/content' 
      ).then(
        res => res.json()
      )

      // Still trying to learn JSON marshalling in GO, until then I will be using JSON.parse on front end not ideal but will work

      this.heading = JSON.parse(heading.Page_data_string)
      this.banner = JSON.parse(banner.Page_data_string)
      this.content = JSON.parse(content.Page_data_string)

      console.log(this.banner.banner)
      console.log(this.banner.banner.length)

      for(var x = 0; x < this.banner.banner.length; x++) {
        console.log(this.banner.banner[x].image)
      }

    },
    methods: {
      refresh() {
        this.$fetch()
      }
    }
  }
</script>
