<template>
  <div class="books-list-container">
    heyyyyyyyyyyyyyy
    <div v-for="(book, idx) in books" :key="idx">
      sdfsdf
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
    BookPreview
  }
};
</script>

<style scoped lang="scss">
</style>
