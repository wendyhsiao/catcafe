<template>
  <div class="container py-5">
    <AdminCafeForm 
      @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>
import AdminCafeForm from '../../components/admin/AdminCafeForm.vue'
import AdminAPI from '../../apis/admin.js'
import {Toast} from '../../utils/helpers.js'

export default {
  components: {
    AdminCafeForm
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {  
        const {data} = await AdminAPI.postAdminCafe({ formData })
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