<template>
  <v-app>
    <NavbarComponent></NavbarComponent>
    <v-main>
      <ListComponent></ListComponent>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ListComponent from "./components/ListComponent.vue";

export default {
  name: "App",

  components: { NavbarComponent, ListComponent },

  data: () => ({
    //
  }),
};
</script>
