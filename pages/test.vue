<template>
    <div class="container" id="home">
        <p v-if="$fetchState.pending">Fetching home</p>
        <p v-else-if="$fetchState.error">An error occured</p> 

        <section class="section" id="heading">
          <h1 class="title">
                {{ heading.heading }}
          </h1>
        </section>
        <section class="section" id="banner">  
              <div class="container">
                <h1 class="title"></h1>
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-12">
                        <div class="tile">

                          <div v-for="banner of banner.banner" class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-info">
                              <figure class="image">
                                <img :src="banner.image[0].img_url">
                              </figure>

                              <div v-if="banner.image[0].collapsable" class="accordion">
                                <div class="col">
                                  <div class="tabs">
                                    <div class="tab">
                                      <input type="checkbox" id="chck1">
                                      <label class="tab-label" for="chck1">Basil Williams</label>
                                      <div class="tab-content">
                                        {{banner.image[0].data}}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p v-else class="subtitle">{{banner.image[0].data}}</p>

                            </article>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="content">
          <div class="columns is-mobile">
            <div class="column">
              <div class="description">
                <span class="content" v-html="content.content"></span>
              </div>
            </div>
          </div>
          <div class="links">
            <a :href="'mailto:' + content.contact" target="_blank" rel="noopener noreferrer" class="button--sacos_yellow">{{content.contact}}</a>
          </div>
        </section>

        

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

      // console.log(this.content)

    },
    methods: {
      refresh() {
        this.$fetch()
      }
    }
  }
</script>
