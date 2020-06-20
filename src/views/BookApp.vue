<template>
  <div id="style-1" class="BookApp">
    <h1>missBooks</h1>
    <BookFilter @filter="setFilter" />
    <router-link class="open-add-modal" to="/add">Add Book</router-link>
    <router-view />

    <div id="style-1" class="books-main-content">
      <BooksList :books="bookToShow" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookFilter from "@/components/BookFilter";
import BooksList from "@/components/BooksList.vue";
import bookService from "../services/book.service";
import eventBus from "../services/eventBus.service";
export default {
  name: "BookApp",

  data() {
    return {
      filterBy: {
        searchStr: "",
      },
    };
  },

  async created() {
    this.loadBooks();
    eventBus.$on("book-added", () => console.log("book added sucssesfully"));
  },

  computed: {
    bookToShow() {
      let filter = this.filterBy;
      if (!filter.searchStr) return this.books;
      let bookToShow = [...this.books];
      bookToShow = bookToShow.filter((book) => {
        return book.title
          .toLowerCase()
          .includes(this.filterBy.searchStr.toLowerCase());
      });

      return bookToShow;
    },

    books() {
      return this.$store.getters.books;
    },
  },

  methods: {
    setFilter(filterBy) {
      this.filterBy = { ...filterBy };
    },

    async loadBooks() {
      await this.$store.dispatch({ type: "loadBooks" });
    },
  },

  components: {
    BooksList,
    BookFilter,
  },
};
</script>

<style>
.books-main-content {
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  min-height: 90vh;
  padding-top: 20px;
}

.open-add-modal {
  position: absolute;
  left: 4vw;
  top: 15vh;
  text-decoration: none;
  font-size: 25px;
  color: #4cd137;
}
</style>
