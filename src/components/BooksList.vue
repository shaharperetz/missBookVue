<template>
  <div class="books-list-container flex a-center j-center wrap">
    <div v-for="(book, idx) in books" :key="idx">
      <book-preview :book="book" />
    </div>
  </div>
</template>

<script>
import BookPreview from "./BookPreview.vue";
import bookService from "../services/book.service";

export default {
  data() {
    return {
      books: bookService.query()
    };
  },
  name: "BooksList",
  props: {
    msg: String
  },
  components: {
    BookPreview
  }
};
</script>

<style scoped lang="scss">
</style>
