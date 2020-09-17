<template>
  <nav class="navbar navbar-light bg-white">
    <router-link class="navbar-brand" 
      :to="{name: 'admin-cat-cafes'}">
      <img src="../../../public/catcafeLogo.png" class="logo">
    </router-link>

    <div v-if="isAuthenticated" >
      <div class="mx-3 d-inline-block">
        {{currentUser.name}}
      </div>
      <div 
        @click="logout"
        class="btn btn-yellow d-inline-block">登出
      </div>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/admin/catcafes/signin')
    }
  }
}
</script>

<style scoped>
.btn-yellow {
  color: #564739;
  background-color: #FAC674;
}

.logo {
  height: 40px;
}
</style>