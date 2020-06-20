<template>
  <section class="book-edit">
    <div class="edit-container">
      <img v-if="currBook" :src="currBook.thumbnail" alt />
      <form @submit.prevent="onEdit()">
        <input type="text" v-model="bookName" value="bookName" />
        <input type="number" v-model="bookPrice" value="bookPrice" />
        <button>SAVE</button>
      </form>
    </div>
  </section>
</template>

<script>
import bookService from "../services/book.service";
export default {
  data() {
    return {
      bookName: "",
      bookPrice: 0,
      currBook: null
    };
  },

  created() {
    const id = this.$route.params.id;
    this.loadBook(id);
  },

  methods: {
    async loadBook(id) {
      let book = await bookService.getById(id);
      this.currBook = book;
      this.bookName = book.title;
      this.bookPrice = book.listPrice.amount;
    },
    onEdit() {
      const id = this.$route.params.id;
      let book = {
        name: this.bookName,
        price: this.bookPrice,
        id
      };
      this.$store.dispatch({ type: "editBook", book });
      this.$notify({
        group: "book-add",
        title: "Book Saved!",
        text: `Book Changed Successfully`
      });
      this.$router.push(`/details/${id}`);
    }
  }
};
</script>

<style>
.edit-container {
  width: 50%;
  background-color: #353b48;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin-top: 50px;
  border-radius: 20px;
}
.book-edit {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.book-edit img {
  margin-top: 50px;
}

.book-edit input {
  outline: none;
  padding: 10px;
  margin: 10px;
  display: block;
  border: none;
  border-radius: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.178);
  color: white;
  text-align: center;

  background-color: #353b485e;
  font-size: 22px;
}

.book-edit input::-webkit-outer-spin-button,
.book-edit input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.book-edit button {
  outline: none;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(173, 216, 230, 0.377);
  cursor: pointer;
  padding: 10px 30px 10px 30px;
  color: rgba(255, 255, 255, 0.404);
  font-size: 20px;
  border: none;
  transition: 0.5s;
}
.book-edit button:hover {
  color: white;
}
</style>