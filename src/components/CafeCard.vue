<template>
  <div class="col-6 col-md-3">
    <div class="card mb-3">
      <img :src=cafe.Images[0].url class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{cafe.name}}</h5>
        <p class="card-text">台北市</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cafe: {
      type: Array,
      required: true
    }
  }
}
</script>