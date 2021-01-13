<template>
  <div class="container">
    <div class="columns">
      <div class="column is-four-fifths slider-container">
        <vueper-slides 
          class="no-shadow"
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 1 } }"
          >
          <vueper-slide v-for="(slide, i) in banner.banner" 
            :key="i" 
            :content="slide.image[0].img_url"
            :image="slide.image[0].img_url" 
            :style="'background-color:#e3b602'"/>
        </vueper-slides>
      </div>
    </div>
  </div>
</template>

<script>
  // In your Vue.js component.
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

  export default {
    
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
        content: {},
        // slides: [
        //   {
        //     title: 'Slide #1',
        //     content: 'Slide content.'
        //   },
        //   {
        //     title: 'Slide #2',
        //     content: 'Slide content.'
        //   },
        //   {
        //     title: 'Slide #3',
        //     content: 'Slide content.'
        //   },
        //   {
        //     title: 'Slide #4',
        //     content: 'Slide content.'
        //   }
        // ]
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

      console.log(this.banner)

    },
    methods: {
      refresh() {
        this.$fetch()
      }
    },
    mounted () {
       // Your JQuery code here
    }
  }

</script>