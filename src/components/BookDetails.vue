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
      currBook: null
    };
  },
  name: "BookDetails",
  props: {
    msg: String
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
