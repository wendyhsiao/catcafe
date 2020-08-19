<template>
        <div class="card-body">
          <h1 class="card-title">{{cafe.name}}</h1>
          <p class="card-text"><strong>店家地址:</strong> {{cafe.address_city}}{{cafe.address_dist}}{{cafe.address_other}}</p>
          <p class="card-text"><strong>營業時間:</strong> {{cafe.opening_hour}}</p>
          <p class="card-text"><strong>店家電話:</strong> {{cafe.tel}}</p>
          <p class="card-text"><strong>最低消費:</strong> {{cafe.minimum_charge}}</p>
          <p class="card-text"><strong>Facebook:</strong> {{cafe.facebook}}</p>
          <p class="card-text"><strong>Instagram:</strong> {{cafe.instagram}}</p>
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