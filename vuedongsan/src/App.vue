<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <div class="red" :style="스타일">{{ products[0] }}</div>
    <p>{{ price1 }}</p>
  </div>
  <div>
    <div>{{ products[1] }}</div>
    <p>{{ price2 }}</p>
  </div>
  <div>
    <div>{{ products[2] }}</div>
    <p>{{ price3 }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      price1: 50,
      price2: 60,
      price3: 70,
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
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
  margin-top: 60px;
}
</style>
