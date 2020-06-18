
<template>
  <section class="add-book-modal">
    <button @click="closeModal">X</button>
    <input
      class="google-search"
      type="text"
      @keyup.enter.stop.prevent="getGoogleBooks"
      v-model="googleSearch"
    />
    <ul v-if="googleBooks">
      <li class="g-book" v-for="(book , idx) in googleBooks" :key="idx">
        {{book.volumeInfo.title}}
        <button @click="addBook(book)">Add Book</button>
      </li>
    </ul>
  </section>
</template>


<script>
import BookService from "../services/book.service";
import bookService from "../services/book.service";
export default {
  data() {
    return {
      googleBooks: null,
      googleSearch: ""
    };
  },

  methods: {
    async getGoogleBooks() {
      if (!this.googleSearch) this.googleBooks = null;
      const books = await bookService.getGoogleBooks(this.googleSearch);
      this.googleBooks = books;
      console.log("getGoogleBooks -> this.googleBooks", this.googleBooks);
    },
    closeModal() {
      this.$router.push("/");
    },
    async addBook(book) {
      await this.$store.dispatch({ type: "addBook", book });
    }
  }
};
</script>

<style scoped>
.g-book {
  width: 50%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(88, 87, 87, 0.253);
}

.google-search {
  margin: 0 auto;
  display: block;
}
</style>