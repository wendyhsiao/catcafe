<template>
  <div class="container py-5">
  </div>
</template>

<script>
import AdminAPI from '../../apis/admin.js'


export default {
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
        minimum_charge: '',
        facebook: '',
        instagram: '',
        consumption_patterns: '',
        rule: '',
        other: '',
      },
      images: []
    }
  },
  created() {
    const {id} = this.$route.params
    this.fetchcafe(id)
  },
  methods: {
    async fetchcafe(id) {
      try {
        const {data} = await AdminAPI.getAdminCafe(id)
        this.cafe = data.cafe
        this.images = data.cafe.Images
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>