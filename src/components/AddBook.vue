
<template>
  <section class="add-book-modal">
    <button @click="closeModal">X</button>
    <input type="text" @keyup.enter.stop.prevent="getGoogleBooks" v-model="googleSearch" />
    <div v-if="googleBooks">
      <div v-for="(book , idx) in googleBooks" :key="idx">{{book.volumeInfo.title}}</div>
    </div>
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
    }
  }
};
</script>