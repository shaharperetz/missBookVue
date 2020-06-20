<template>
  <div id="style-1" class="books-list-container flex a-center j-center wrap">
    <div v-for="(book, idx) in books" :key="idx">
      <book-preview :book="book" />
    </div>
  </div>
</template>

<script>
import BookPreview from "./BookPreview.vue";
import bookService from "../services/book.service";

export default {
  name: "book-list",
  props: ["books"],
  components: {
    BookPreview,
  },
};
</script>

<style scoped lang="scss">
.books-list-container {
  height: 400px;
  overflow: auto;
  height: 100%;
}
</style>
