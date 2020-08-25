<template>
  <nav class="navbar navbar-light bg-white">
    <router-link class="navbar-brand" 
      :to="{name: 'cat-cafes'}">
      <img src="../../public/catcafeLogo.png" class="logo">
    </router-link>
    <form class="form-inline">
      <input type="search" name="search" 
        v-model="search"
        class="form-control mr-sm-2" placeholder="Search">
      <button 
        @click.stop.prevent="handleSubmit"
        class="btn btn-outline-success btn-search my-2 my-sm-0" type="submit">Search</button>
      <div v-if="isAuthenticated" class="mx-3">
        {{currentUser.name}}
      </div>
    </form>
  </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    handleSubmit() {
      this.$router.push({ path: '/catcafes', query: { search: this.search }}).catch(()=>{})
    }
  }
}
</script>

<style scoped>
.logo {
  height: 40px;
}
</style>