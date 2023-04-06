<template>
  <div class="d-flex align-center flex-column">
    <v-card class="pa-5 ma-5" width="400">
      <div>{{ 블로그글들[$route.params.id - 1].title }}</div>
      <div>{{ 블로그글들[$route.params.id - 1].content }}</div>
      <div>{{ 블로그글들[$route.params.id - 1].date }}</div>
    </v-card>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "DetailComponent",
  props: {
    블로그글들: Array,
  },
};
</script>
<style></style>
