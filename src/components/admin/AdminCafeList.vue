<template>
  <div>
    <form class="form-inline">
      <input type="search" name="search" 
        v-model="search"
        class="form-control mr-sm-2" placeholder="Search name">
      <button 
        @click.stop.prevent="handleSubmit"
        class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

    <table  class="table table-bordered table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">city</th>
          <th scope="col">other</th>
        </tr>
      </thead>
      <tbody v-if="cafes.length===0">
        <td colspan="4" class="text-center">無查詢結果</td>
      </tbody>
      <tbody v-else>
        <tr v-for="cafe in cafes"
          :key="cafe.id">
          <td scope="row">{{cafe.id}}</td>
          <td>{{cafe.name}}</td>
          <td>{{cafe.address_city}}</td>
          <td class="w-50">
            <a href="#" class="btn btn-secondary btn-sm">修改資訊</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    cafes: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({ path: '/admin/catcafes', query: { search: this.search }})
    }
  }
}
</script>