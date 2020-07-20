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
    this.fetchCafes()
  },
  methods: {
    async fetchCafes() {
      try {
        const {data, status, statusText} = await cafesAPI.getCafes()

        this.cafes=data.cafes
        console.log('data',data)
        console.log('status',status)
        console.log('statusText',statusText)
      } catch(error) {
        console.log('error', error)
      }
    }
  }
}
</script>