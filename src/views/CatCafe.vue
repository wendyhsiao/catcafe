<template>
  <div>
    <Navbar/>
    <div class="container py-5">
      <Spinner v-if="isLoading"/>
      <div v-else>
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-7 py-3 px-5">
              <div class="gallery">
                <VueSlickCarousel
                  class="mainImage mb-3"
                  ref="c1"
                  :asNavFor="$refs.c2"
                  v-bind="settings"
                  >
                    <img v-for="(image, index) in images"
                    :key="index" 
                    :src="image.url">
                </VueSlickCarousel>
                
                <div class="gallery-prevArrow"
                  @click="syncPrevSliders"
                  ></div>
                <div class="gallery-nextArrow"
                  @click="syncNextSliders"
                  ></div>
              </div>

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
                  @click="showSelect(index)"
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
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CafeDetail from '../components/CafeDetail.vue'
import CafeRule from '../components/CafeRule.vue'
import cafesAPI from '../apis/cafes.js'
import Spinner from '../components/Spinner.vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    Navbar,
    CafeDetail,
    CafeRule,
    VueSlickCarousel,
    Spinner
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
        infinite: true,
        speed: 500,
        slidesToShow: 1,
      },
      settings2: {
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        arrows: false,
      },
      isLoading: true
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
        
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('error', error)
      }
    },
    showSelect(slide) {
      this.$refs.c1.goTo(slide)
    },
    syncPrevSliders() {
      this.$refs.c1.prev()
      this.$refs.c2.prev()
    },
    syncNextSliders() {
      this.$refs.c1.next()
      this.$refs.c2.next()
    }
  }
}
</script>

<style >
.gallery {
  position: relative;
}
.gallery-nextArrow {
  height: 100%;
  width: 50%;
  position: absolute;
  right: -25px;
  top: 0;
}
.gallery-prevArrow {
  height: 100%;
  width: 50%;
  position: absolute;
  left: -25px;
  top: 0;
}
.mainImage {
  position: absolute;
  top: 0;
  left: 0;
}
.mainImage img {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  background: #F7F5F3;
}
.thumbnails img {
  height: 80px;
  object-fit: cover;
  padding: 0 5px;
}
.slick-prev:before,
.slick-next:before {
  color: #564739;
}
</style>