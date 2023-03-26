<template>
  <div class="d-flex align-center flex-column">
    <div v-for="블로그글 in 블로그글들" :key="블로그글">
      <v-card class="pa-5 ma-5" width="400">
        <div>{{ 블로그글.title }}</div>
        <div>{{ 블로그글.content }}</div>
        <div>{{ 블로그글.date }}</div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    블로그글들: Array,
  },
};
</script>

<style></style>
