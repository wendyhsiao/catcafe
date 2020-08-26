<template>
  <div>
    <AdminNavbar />
    <div class="conta iner py-5">
      <AdminCafeForm 
        v-if="!isLoading"
        :initial-cafe="cafe"
        :initial-images="images"
        @after-submit="handleAfterSubmit" />
    </div>
  </div>
</template>

<script>
import AdminAPI from '../../apis/admin.js'
import AdminCafeForm from '../../components/admin/AdminCafeForm.vue'
import AdminNavbar from '../../components/admin/AdminNavbar.vue'
import {Toast} from '../../utils/helpers.js'

export default {
  components: {
    AdminCafeForm,
    AdminNavbar
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
      images: [],
      isLoading: true
    }
  },
  created() {
    const {id} = this.$route.params
    this.fetchCafe(id)
  },
  beforeRouteUpdate (to, from, next) {
    const {id} = to.params
    this.fetchCafe(id)
    next()
  },
  methods: {
    async fetchCafe(id) {
      try {
        const {data} = await AdminAPI.getAdminCafe(id)
        this.cafe = data.cafe
        this.images = data.cafe.Images
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    },
    async handleAfterSubmit(formData) {
      try {  
        const {data} = await AdminAPI.putAdminCafe({
          cafeId: this.cafe.id, 
          formData
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({name: 'admin-cat-cafes'})
      } catch (error) {
        Toast.fire({
          icon: 'warning',
          title: error
        })
        console.log(error)
      }
    }
  }
}
</script>