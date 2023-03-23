<template>
  <div>
    <img :src="원룸.image" class="room-img" />
    <h4>
      {{ 원룸.title }}
    </h4>
    <p>{{ 원룸.price }}만원</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    원룸: Object,
  },
};
</script>

<style>
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
