<template>
  <div class="container py-5">
    <div>
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-7 py-3 px-5">
            <VueSlickCarousel
              class="mainImage mb-3"
              ref="c1"
              :asNavFor="$refs.c2"
              v-bind="settings"
              >
              <img 
                v-for="(image, index) in images"
                :key="index"
                :src="image.url">
            </VueSlickCarousel>

            <VueSlickCarousel
              class="thumbnails"
              ref="c2"
              :asNavFor="$refs.c1"
              v-bind="settings2"
              >
              <img 
                v-for="(image, index) in images"
                :key="index"
                :src="image.url"
                >
            </VueSlickCarousel>
          </div>

          <div class="col-md-5 p-3">
            <CafeDetail :cafe="cafe"/>
          </div>
        </div>
      </div>  
      <CafeRule :cafe="cafe"/>
    </div>
  </div>
</template>

<script>
import CafeDetail from '../components/CafeDetail.vue'
import CafeRule from '../components/CafeRule.vue'
import cafesAPI from '../apis/cafes.js'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    CafeDetail,
    CafeRule,
    VueSlickCarousel
  },
  data() {
    return {
      cafe: {
        id: -1,
        name: '',
        tel: '',
        address_city: '',
        address_dist: '',
        address_other: '',
        opening_hour: '',
        consumption_patterns: '',
        rule: '',
        other: '',
        minimum_charge: '',
        facebook: '',
        instagram: '',
        Images: []
      },
      images: [],
      settings: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      settings2: {
        dots: false,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        touchThreshold: 5,
        arrows: false
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchCafe(id)
  },
  beforeRouteUpdate (to, from, next) {
    const {id} = to.params
    this.fetchCafe(id)
    next()
  },
  methods: {
    async fetchCafe (id) {
      try {
        const {data} = await cafesAPI.getCafe(id)
        this.cafe = data.cafe
        this.images = data.cafe.Images
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
</script>

<style >
.mainImage img {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  background: #f0f0f0;
}
.thumbnails img {
  height: 80px;
  object-fit: cover;
  padding: 0 5px;
}
.slick-prev:before,
.slick-next:before {
  color: #333;
}
</style>