<template>
  <div class="BookApp">
    <h1>missBooks</h1>

    <div class="books-main-content">
      <BooksList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BooksList from "@/components/BooksList.vue";
export default {
  name: "BookApp",
  components: {
    BooksList
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