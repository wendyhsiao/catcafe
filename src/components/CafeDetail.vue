<template>
        <div class="card-body">
          <h1 class="card-title">{{cafe.name}}</h1>
          <p class="card-text">連話電話 {{cafe.tel}}</p>
          <p class="card-text">店家地址 {{cafe.address_city}}{{cafe.address_dist}}{{cafe.address_other}}</p>
          <p class="card-text">營業時間 {{cafe.opening_hour}}</p>
          <p class="card-text">最低消費 {{cafe.minimum_charge}}</p>
          <p class="card-text">Facebook {{cafe.facebook}}</p>
          <p class="card-text">Instagram {{cafe.instagram}}</p>
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