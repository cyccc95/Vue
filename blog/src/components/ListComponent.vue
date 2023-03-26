<template>
  <div v-for="블로그글 in 블로그글들" :key="블로그글">
    <h5>{{ 블로그글.title }}</h5>
    <p>{{ 블로그글.content }}</p>
    <p>{{ 블로그글.date }}</p>
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
