<template>
  <div>
    <AdminNavbar />
    <div class="container py-5">
      <Spinner v-if="isLoading"/>
      <div v-else>
        <AdminCafeList :cafes="cafes"/>
        <AdminCafePagination 
          :pagination="pagination"
          :current-page="currentPage"/>
      </div>
    </div>
  </div>
</template>

<script>
import AdminCafeList from '../../components/admin/AdminCafeList.vue'
import AdminCafePagination from '../../components/admin/AdminCafePagination.vue'
import AdminNavbar from '../../components/admin/AdminNavbar.vue'
import AdminAPI from '../../apis/admin.js'
import Spinner from '../../components/Spinner.vue'

export default {
  components: {
    AdminCafeList,
    AdminCafePagination,
    Spinner,
    AdminNavbar
  },
  data() {
    return {
      cafes: [],
      currentPage: 1,
      pagination: {
        page: -1,
        pages: -1,
        totalPages: [],
        previousPage: -1,
        nextPage: -1
      },
      isLoading: true
    }
  },
  created() {
    const {search='', page=''} = this.$route.query
    this.fetchCafes({search, page})
  },
  beforeRouteUpdate (to, from, next) {
    const {search='', page=''} = to.query
    this.fetchCafes({search, page})
    next()
  },
  methods: {
    async fetchCafes({search, page}) {
      try {
        const {data} = await AdminAPI.getAdminCafes({
          search: search,
          page: page
        })

        this.cafes = data.cafes.rows
        this.currentPage = data.pagination.page
        this.pagination = data.pagination
        
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('error', error)
      }
    }
  }
}
</script>