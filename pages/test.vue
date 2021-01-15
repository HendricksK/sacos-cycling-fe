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
            <div class="columns">
                <div class="column is-four-fifths slider-container">
                    <vueper-slides 
                      class="no-shadow" id="banner-slider"
                      :visible-slides="3"
                      slide-multiple
                      :gap="3"
                      :slide-ratio="1 / 4"
                      :dragging-distance="200"
                      :breakpoints="{ 800: { visibleSlides: 1 } }"
                      >
                      <vueper-slide class="show-more" v-for="(slide, i) in banner.banner" 
                        :key="i" 
                        :content="slide.image[0].data"
                        :image="slide.image[0].img_url"
                        :style="'background-color:#e3b602'">
                        <template v-slot:loader>
                          <i class="icon icon-loader spinning"></i>
                          <span>Loading...</span>
                        </template>
                        </vueper-slide>
                      </vueper-slides>
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
  // In your Vue.js component.
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
    

export default {
    mounted(){
        this.init()
    },
    layout(context) {
        return 'default'
    },
    components: { VueperSlides, VueperSlide },
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
      this.slider_number = this.banner.banner.length;
    },
    methods: {
        refresh() {
            this.$fetch()
        },
        init(){

            var show_more_btns =  document.getElementsByClassName('show-more')
            console.log(show_more_btns)
            if (typeof(show_more_btns) != 'undefined' && show_more_btns != null) {
                for (var i = 0; i < show_more_btns.length; i++) {
                    console.log(show_more_btns[i].children[0])
                    show_more_btns[i].children[0].setAttribute('id', 'show-more-'+i); 
                    var show_more_id = 'show-more-'+i
                    document.getElementById(show_more_id).addEventListener('click', showMoreOpenClose);
                }
            }

            function showMoreOpenClose(e) {
                
                console.log(document.getElementById(e.target.parentElement.id).classList)

                if (document.getElementById(e.target.parentElement.id).classList.length > 1) {

                    var class_list = document.getElementById(e.target.parentElement.id).classList

                    if (class_list[1] === 'open') {
                        document.getElementById(e.target.parentElement.id).classList.remove('open')
                        document.getElementById(e.target.parentElement.id).classList.add('closed')
                    } else if (class_list[1] === 'closed') {
                        document.getElementById(e.target.parentElement.id).classList.remove('closed')
                        document.getElementById(e.target.parentElement.id).classList.add('open')
                    }          
                } else {
                    document.getElementById(e.target.parentElement.id).classList.add('open')
                }
            }
        }
    }
}

</script>
