<template>
  <div id="cat-cafe">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap' // Bootstrap 的 js
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  } 
}
</script>

<style>
body {
  background-color: #f9f9f9;
}
</style>