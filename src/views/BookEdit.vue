<template>
  <section class="book-edit">
    <form action>
      <input type="text" v-model="bookName" value="bookName" />
      <input type="number" v-model="bookPrice" value="bookPrice" />
    </form>
  </section>
</template>

<script>
import bookService from "../services/book.service";
export default {
  data() {
    return {
      bookName: "",
      bookPrice: 0
    };
  },

  created() {
    const id = this.$route.params.id;
    this.loadBook(id);
  },

  methods: {
    async loadBook(id) {
      let book = await bookService.getById(id);
      console.log("loadBook -> book", book);
      this.bookName = book.title;
      this.bookPrice = book.listPrice.amount;
    }
  }
};
</script>

<style>
</style>