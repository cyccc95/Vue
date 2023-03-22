<template>
  <div class="black-bg" v-if="모달창열렸니">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="i in 메뉴들" :key="i">{{ i }}</a>
  </div>

  <div v-for="i in 원룸들" :key="i.id">
    <img :src="i.image" class="room-img" />
    <h4 @click="모달창열렸니 = true">{{ i.title }}</h4>
    <p>{{ i.content }}</p>
    <p>{{ i.price }}만원</p>
  </div>
</template>

<script>
import data from "./assets/oneroom";

export default {
  name: "App",
  data() {
    return {
      원룸들: data,
      메뉴들: ["Home", "Shop", "About"],
      모달창열렸니: false,
    };
  },
  // vue에서 함수 만드는 곳
  methods: {},
  components: {},
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

.room-img {
  width: 100%;
  margin-top: 40px;
}

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
