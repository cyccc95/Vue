<template>
  <div>
    <PostComponent />
    <PostComponent />
    <PostComponent />
  </div>
</template>
<script>
import PostComponent from "./PostComponent";
export default {
  name: "ContainerComponent",
  components: { PostComponent },
};
</script>
<style></style>
