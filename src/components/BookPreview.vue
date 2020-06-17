<template>
  <div class="book-card flex a-center">
    <img :src="book.thumbnail" alt srcset />
    <div class="book-card-data flex col">
      <h2>{{book.title}}</h2>
      <span>{{book.publishedDate}}</span>
      <p>{{book.description}}</p>
    </div>
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
  // height: 10vw;
  width: 30vw;
  background-color: rgba(0, 128, 0, 0.192);
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 11px -3px #00000062;
}

.book-card img {
  height: 30vh;
  border-radius: 10px;
  transition: 1s;
}
.book-card img:hover {
  transform: scale(1.1);
  filter: brightness(1.6);
}

.book-card-data {
  width: 100%;
  // padding: 15px;
  height: 30vh;
}

.book-card-data h2 {
  justify-self: start;
}
.book-card-data p {
  padding: 0px 10px;
}
</style>
