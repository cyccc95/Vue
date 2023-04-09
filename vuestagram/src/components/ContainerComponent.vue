<template>
  <div>
    <PostComponent v-for="(item, i) in 게시물" :key="i" :게시물="item" />
  </div>
</template>
<script>
import PostComponent from "./PostComponent";
export default {
  name: "ContainerComponent",
  components: { PostComponent },
  props: {
    게시물: Array,
  },
};
</script>
<style></style>
