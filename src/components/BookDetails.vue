<template>
  <div class="book-details-container flex a-center j-center wrap">
    <h2>{{book.title}}</h2>
    <img :src="book.thumbnail" alt srcset />
    <span>{{book.publishedDate}}</span>
    <p>{{book.description}}</p>
  </div>
</template>

<script>
import bookService from "../services/book.service";

export default {
  data() {
    return {
      book: null
    };
  },
  created() {
    console.log("IMG HEREEEEE");
    const bookId = this.$route.params.id;
    this.book = bookService.getById(bookId);
  },
  name: "BookDetails",
  props: [],
  components: {}
};
</script>

<style scoped lang="scss">
.book-details-container {
  width: 70vw;
  background: grey;
  margin: 0 auto;
  margin-top: 20px;
  padding-top: 20px;
}

.book-details-container img {
  border-radius: 10px;
  transition: 1s;
}

.book-details-container img:hover {
  transform: scale(1.1);
  filter: brightness(1.6);
}
</style>
