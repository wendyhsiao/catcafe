<template>
  <div class="container py-5">
    <div>
      <AdminCafeList :cafes="cafes"/>
      <AdminCafePagination 
        :pagination="pagination"
        :current-page="currentPage"/>
    </div>
  </div>
</template>

<script>
import AdminCafeList from '../../components/admin/AdminCafeList.vue'
import AdminCafePagination from '../../components/admin/AdminCafePagination.vue'
import AdminAPI from '../../apis/admin.js'

export default {
  components: {
    AdminCafeList,
    AdminCafePagination
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
      }
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

        this.cafes=data.cafes.rows
        this.currentPage=data.pagination.page
        this.pagination=data.pagination
      } catch (error) {
        console.log('error', error)
      }
    }
  }
}
</script>