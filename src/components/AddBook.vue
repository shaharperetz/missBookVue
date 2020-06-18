
<template>
  <section class="add-book-modal fade-in">
    <button class="exit-add-book-modal" @click="closeModal">X</button>
    <div class="add-book-header flex col a-center">
      <label for="google-search">Search A book Online</label>
      <input
        placeholder="Search a Book"
        class="google-search"
        type="text"
        id="google-search"
        @keyup.enter.stop.prevent="getGoogleBooks"
        v-model="googleSearch"
      />
    </div>
    <div class="add-book-list">
      <BooksList :books="books" />
    </div>
    <!-- <ul v-if="googleBooks">
      <li class="g-book" v-for="(book , idx) in googleBooks" :key="idx">
        {{book.volumeInfo.title}}
        <button @click="addBook(book)">Add Book</button>
      </li>
    </ul>-->
  </section>
</template>


<script>
import BookService from "../services/book.service";
import bookService from "../services/book.service";
import BooksList from "@/components/BooksList.vue";

export default {
  data() {
    return {
      books: null,
      googleSearch: ""
    };
  },

  components: {
    BooksList
  },
  methods: {
    async getGoogleBooks() {
      if (!this.googleSearch) this.books = null;
      const books = await bookService.getGoogleBooks(this.googleSearch);
      this.books = books;
      console.log("getGoogleBooks -> this.googleBooks", this.books);
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
.add-book-list {
  width: 100%;
  height: 55vh;
  background-color: rgba(0, 128, 0, 0);
  /* overflow: auto; */
}

.add-book-modal {
  background-color: rgb(53, 59, 72);
  width: 90vw;
  height: 85vh;
  position: fixed;
  top: 10vh;
  left: 5vw;
  border-radius: 10px;
  color: white;
  box-shadow: 0px 0px 15px 5px #0000004d;
}
.add-book-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.137);
  width: 100%;
}
.add-book-modal label {
  font-size: 30px;
  margin: 20px;
  padding: 15px;
}

.exit-add-book-modal {
  float: right;
  border: none;
  font-size: 20px;
  color: white;
  outline: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  transition: 0.7s;
}

.exit-add-book-modal:hover {
  transform: scale(1.2);
}

.g-book {
  width: 50%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(88, 87, 87, 0.253);
}

.google-search {
  font-size: 20px;
  color: white;
  margin: 0 auto;
  display: block;
  padding: 15px 35px;
  margin-bottom: 2vh;
  background-color: rgba(128, 128, 128, 0.219);
  border: none;
  border-radius: 10px;
  outline: none;
}

.google-search::placeholder {
  text-align: center;
}

.fade-in {
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>