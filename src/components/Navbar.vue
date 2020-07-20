<template>
  <nav class="navbar navbar-light bg-light">
    <router-link class="navbar-brand" 
      :to="{name: 'cat-cafes'}">CatCafe</router-link>
    <form class="form-inline">
      <input type="search" name="search" 
        v-model="search"
        class="form-control mr-sm-2" placeholder="Search">
      <button 
        @click.stop.prevent="handleSubmit"
        class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({ path: '/catcafes', query: { search: this.search }})
    }
  }
}
</script>