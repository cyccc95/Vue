<template>
  <Transition name="fade">
    <ModalComponent
      @closeModal="모달창열렸니 = false"
      :원룸들="원룸들"
      :누른번호="누른번호"
      :모달창열렸니="모달창열렸니"
    />
  </Transition>

  <div class="menu">
    <a v-for="i in 메뉴들" :key="i">{{ i }}</a>
  </div>

  <DiscountComponent v-if="showDiscount == true" />

  <button @click="priceSort">가격순 정렬</button>
  <button @click="sortBack">되돌리기</button>

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
      showDiscount: true,
      누른번호: 0,
      원룸들: [...data],
      원룸들오리지널: [...data],
      메뉴들: ["Home", "Shop", "About"],
      모달창열렸니: false,
    };
  },
  // vue에서 함수 만드는 곳
  methods: {
    priceSort() {
      this.원룸들.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.원룸들 = [...this.원룸들오리지널];
    },
  },
  // lifecycle hook
  mounted() {
    // this를 쓰려면 arrow function 사용
    setTimeout(() => {
      this.showDiscount = false;
    }, 2000);
  },
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

/* 퇴장 애니메이션은 enter 대신 leave */
.fade-enter-from {
  /* opacity: 0; */
  transform: translateY(-1000px);
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  /* opacity: 1; */
  transform: translateY(0px);
}
</style>
