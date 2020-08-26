<template>
<div>
  <Navbar/>
  <div class="container py-5">
    <Spinner v-if="isLoading"/>
    <div class="row" v-else>
      <CafeCard 
        v-for="cafe in cafes"
        :key="cafe.id"
        :cafe="cafe" />
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
    </div>
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CafeCard from '../components/CafeCard.vue'
import cafesAPI from '../apis/cafes.js'
import InfiniteLoading from 'vue-infinite-loading'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    Navbar,
    CafeCard,
    InfiniteLoading,
    Spinner
  },
  data() {
    return {
      cafes: [],
      page: 1,
      search: '',
      isLoading: true,
      infiniteId: +new Date()
    }
  },
  created() {
    const {search} = this.$route.query
    this.search = search
    this.infiniteHandler()
  },
  beforeRouteUpdate (to, from, next) {
    const {search} = to.query
    this.search = search
    this.page = 1
    this.cafes = []
    this.infiniteId += 1
    next()
  },
  methods: {
    // identifier 屬性發生變化的時候，該組件就會自行重設
    async infiniteHandler( $state ) {
      try {
        const {data} = await cafesAPI.getCafes({ search: this.search, page: this.page })
        if (data.cafes.rows.length) {
          this.page += 1
          this.cafes.push(...data.cafes.rows)
          $state.loaded()
        } else {
          $state.complete()
        }
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        console.log('error', error)
      }
    }
  }
}
</script>

<style>
.infinite-loading-container {
  width: 100%;
}
</style>