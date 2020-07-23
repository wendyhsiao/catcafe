<template>
  <div class="container py-5">
    <div>
    </div>
  </div>
</template>

<script>
import AdminAPI from '../../apis/admin.js'

export default {
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