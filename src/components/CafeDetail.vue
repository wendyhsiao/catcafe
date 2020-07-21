<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-6 p-3">
        <img 
          v-if="cafe.Images.length > 0"
          :src="cafe.Images[0].url" class="img-main">
        <div>
          <ul class="pl-0 mb-0">
            <li v-for="image in cafe.Images"
              :key="image.id"
              class="img-list pr-3 pt-3 w-25"
              >
              <img :src="image.url">
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h1 class="card-title">{{cafe.name}}</h1>
          <p class="card-text">連話電話 {{cafe.tel}}</p>
          <p class="card-text">店家地址 {{cafe.address_city}}{{cafe.address_dist}}{{cafe.address_other}}</p>
          <p class="card-text">營業時間 {{cafe.opening_hour}}</p>
          <p class="card-text">最低消費 {{cafe.minimum_charge}}</p>
          <p class="card-text">Facebook {{cafe.facebook}}</p>
          <p class="card-text">Instagram {{cafe.instagram}}</p>
          <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
        </div>
      </div>
    </div>
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

<style>
.img-main, .img-list>img {
  max-height: auto;
  width: 100%;
}
.img-list {
  list-style-type: none;
  display: inline-block;
}
</style>