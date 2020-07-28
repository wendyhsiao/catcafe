<template>
  <div class="text-center">
    <nav aria-label="Page navigation example" class="d-inline-block">
      <ul class="pagination">
        <!-- 上一頁 -->
        <li :class="['page-item', {disabled: currentPage === 1}]">
          <router-link 
            :to="{name: 'admin-cat-cafes', query: {page: pagination.previousPage}}" 
            class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </router-link>
        </li>

        <!-- 頁碼 -->
        <li v-for="page in pagination.totalPages"
          :key="page"
          :class="['page-item', {active: currentPage === page}]"
          >
          <router-link class="page-link" 
            :to="{name: 'admin-cat-cafes', query: {page}}">
            {{page}}
          </router-link>
        </li>
        
        <!-- 下一頁 -->
        <li :class="['page-item', {disabled: currentPage === pagination.pages}]">
          <router-link 
            :to="{name: 'admin-cat-cafes', query: {page: pagination.nextPage}}" 
            class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object
    },
    currentPage: {
      type: Number,
      default: 1
    }
  }
}
</script>