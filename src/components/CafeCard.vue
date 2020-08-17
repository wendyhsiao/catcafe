<template>
  <div class="col-6 col-md-3">
    <router-link :to="{name: 'cat-cafe', params: {id: cafe.id}}">
      <div class="card mb-3">
        <div class="card-img-top">
          <img :src="cafe.Images[0].url" >
        </div>
        <div class="card-body">
          <h5 class="card-title">{{cafe.name}}</h5>
          <p class="card-text">{{cafe.address_city}}</p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    cafe: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  overflow: hidden;
  background: #F7F5F3;
  position: relative;
}
.card-img-top img {
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>