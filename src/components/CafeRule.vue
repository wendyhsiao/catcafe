<template>
  <div class="mt-3 p-3 card">
    <div class="px-3 pt-3">
      <div class="bg-brown p-3">消費方式</div>
      <div class="cafe-text p-3" v-html="cafe.consumption_patterns"></div>
    </div>
    <div class="px-3 pt-3">
      <div class="bg-brown p-3">入店規則</div>
      <div class="cafe-text p-3" v-html="cafe.rule"></div>
    </div>
    <div class="px-3 pt-3">
      <div class="bg-brown p-3">其他備註</div>
      <div class="cafe-text p-3" v-html="cafe.other"></div>
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

<style scoped>
.cafe-text {
  min-height: 200px;
}
</style>