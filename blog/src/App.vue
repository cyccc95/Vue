<template>
  <v-app>
    <NavbarComponent />
    <v-main>
      <router-view :블로그글들="블로그글들"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import data from "./assets/data";

export default {
  name: "App",
  components: { NavbarComponent },

  data: () => ({
    블로그글들: data,
  }),
};
</script>
