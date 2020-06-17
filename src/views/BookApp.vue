<template>
  <div class="BookApp">
    <h1>missBooks</h1>
    <BookFilter @filter="setFilter" />

    <div class="books-main-content">
      <BooksList :books="bookToShow" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookFilter from "@/components/BookFilter";
import BooksList from "@/components/BooksList.vue";
import bookService from "../services/book.service";
export default {
  name: "BookApp",

  data() {
    return {
      filterBy: {
        searchStr: ""
      },
      books: null
    };
  },

  created() {
    this.books = bookService.query();
  },

  computed: {
    bookToShow() {
      let filter = this.filterBy;
      if (!filter.searchStr) return this.books;
      let bookToShow = [...this.books];
      bookToShow = bookToShow.filter(book => {
        return book.title
          .toLowerCase()
          .includes(this.filterBy.searchStr.toLowerCase());
      });

      return bookToShow;
    }
  },

  methods: {
    setFilter(filterBy) {
      this.filterBy = { ...filterBy };
    }
  },

  components: {
    BooksList,
    BookFilter
  }
};
</script>



<style>
.books-main-content {
  width: 90vw;
  background-color: blue;
  margin: 0 auto;
  height: 50vh;
}
</style>