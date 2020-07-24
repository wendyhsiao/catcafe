<template>
  <div class="container py-5">
    <AdminCafeForm 
      :initial-cafe="cafe"
      :initial-images="images"/>
  </div>
</template>

<script>
import AdminAPI from '../../apis/admin.js'
import AdminCafeForm from '../../components/admin/AdminCafeForm.vue'


export default {
  components: {
    AdminCafeForm
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