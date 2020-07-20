<template>
  <div class="container py-5">
    <div class="row">
      <CafeCard 
        v-for="cafe in cafes"
        :key="cafe.id"
        :cafe="cafe" />
    </div>
  </div>
</template>

<script>
import CafeCard from '../components/CafeCard.vue'
import cafesAPI from '../apis/cafes.js'

export default {
  components: {
    CafeCard
  },
  data() {
    return {
      cafes: []
    }
  },
  created() {
    const searchQuery = this.$route.query
    this.fetchCafes(searchQuery)
  },
  beforeRouteUpdate (to, from, next) {
    const searchQuery = to.query
    this.fetchCafes(searchQuery)
    next()
  },
  methods: {
    async fetchCafes( searchQuery ) {
      try {
        const {data, status, statusText} = await cafesAPI.getCafes({ search: searchQuery })

        this.cafes=data.cafes
        console.log('status',status)
        console.log('statusText',statusText)
      } catch(error) {
        console.log('error', error)
      }
    }
  }
}
</script>