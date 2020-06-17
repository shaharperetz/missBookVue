<template>
  <div class="BookApp">
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
  width: 100vw;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  min-height: 90vh;
  padding-top: 20px;
}
</style>