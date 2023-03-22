<template>
  <div class="menu">
    <a v-for="i in 메뉴들" :key="i">{{ i }}</a>
  </div>
  <!-- <div v-for="(a, i) in 3" :key="a">
    <h4>{{ products[i] }}</h4>
    <p>{{ price[i] }}만원</p>
  </div> -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>50만원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>60만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>70만원</p>
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
      스타일: "color : blue",
    };
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
