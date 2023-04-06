<template>
  <div class="d-flex align-center flex-column">
    <div
      v-for="(블로그글, i) in 블로그글들"
      :key="블로그글"
      @click="$router.push('/detail/' + (i + 1))"
    >
      <v-card class="pa-5 ma-5" width="400">
        <div>{{ 블로그글.title }}</div>
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
