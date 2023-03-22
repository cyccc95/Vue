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
  <!-- <div v-for="(a, i) in 3" :key="a">
    <h4>{{ products[i] }}</h4>
    <p>{{ price[i] }}만원</p>
  </div> -->
  <div>
    <img src="./assets/room0.jpg" class="room-img" />
    <h4 @click="모달창열렸니 = true">{{ products[0] }}</h4>
    <p>50만원</p>
    <!-- v-on:click : @click으로 가능 -->
    <button v-on:click="increase(0)">허위매물신고</button>
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img" />
    <h4>{{ products[1] }}</h4>
    <p>60만원</p>
    <button v-on:click="increase(1)">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>
  <div>
    <img src="./assets/room2.jpg" class="room-img" />
    <h4>{{ products[2] }}</h4>
    <p>70만원</p>
    <button v-on:click="increase(2)">허위매물신고</button>
    <span>신고수 : {{ 신고수[2] }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      price: [50, 60, 70],
      신고수: [0, 0, 0],
      모달창열렸니: false,
    };
  },
  // vue에서 함수 만드는 곳
  methods: {
    increase(i) {
      this.신고수[i]++;
    },
  },
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
