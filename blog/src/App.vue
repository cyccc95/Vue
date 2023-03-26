<template>
  <v-app>
    <NavbarComponent />
    <v-main>
      <ListComponent :블로그글들="블로그글들" />
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ListComponent from "./components/ListComponent.vue";
import data from "./assets/data";

export default {
  name: "App",
  components: { NavbarComponent, ListComponent },

  data: () => ({
    블로그글들: data,
  }),
};
</script>
