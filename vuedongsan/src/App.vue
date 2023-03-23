<template>
  <ModalComponent
    @closeModal="모달창열렸니 = false"
    :원룸들="원룸들"
    :누른번호="누른번호"
    :모달창열렸니="모달창열렸니"
  />

  <div class="menu">
    <a v-for="i in 메뉴들" :key="i">{{ i }}</a>
  </div>

  <DiscountComponent />

  <CardComponent
    @openModal="
      모달창열렸니 = true;
      누른번호 = $event;
    "
    :원룸="원룸들[i]"
    v-for="(원룸, i) in 원룸들"
    :key="원룸"
  />
</template>

<script>
import data from "./assets/oneroom";
import CardComponent from "./components/CardComponent.vue";
import DiscountComponent from "./components/DiscountComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";

export default {
  name: "App",
  data() {
    return {
      누른번호: 0,
      원룸들: data,
      메뉴들: ["Home", "Shop", "About"],
      모달창열렸니: false,
    };
  },
  // vue에서 함수 만드는 곳
  methods: {},
  components: { DiscountComponent, ModalComponent, CardComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.menu {
  background-color: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
