<template>
  <div class="black-bg" v-if="모달창열렸니">
    <div class="white-bg">
      <img :src="원룸들[누른번호].image" style="width: 100%" />
      <h4>{{ 원룸들[누른번호].title }}</h4>
      <p>{{ 원룸들[누른번호].content }}</p>
      <p>{{ 원룸들[누른번호].price }}만원</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    원룸들: Array,
    누른번호: Number,
    모달창열렸니: Boolean,
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
