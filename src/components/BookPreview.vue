<template>
  <div class="book-card">
    <h2>im a Book</h2>
  </div>
</template>

<script>
export default {
  name: "BookPreview",
  props: ["book"]
};
</script>

<style scoped lang="scss">
.book-card {
  height: 10vw;
  width: 40vw;
  background-color: green;
}
</style>
