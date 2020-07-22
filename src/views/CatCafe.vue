<template>
  <div class="container py-5">
    <div>
      <CafeDetail :cafe="cafe"/>
      <CafeRule :cafe="cafe"/>
    </div>
  </div>
</template>

<script>
import CafeDetail from '../components/CafeDetail.vue'
import CafeRule from '../components/CafeRule.vue'
import cafesAPI from '../apis/cafes.js'

export default {
  components: {
    CafeDetail,
    CafeRule
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
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
</script>