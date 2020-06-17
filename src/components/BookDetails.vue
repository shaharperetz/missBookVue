<template>
  <div class="book-details-container flex swing-in-top-fwd">
    <img :src="book.thumbnail" alt srcset />
    <div class="book-details-data">
      <h2>{{book.title}}</h2>
      <p>{{book.description}}</p>
      <span>{{book.publishedDate}}</span>
    </div>
  </div>
</template>

<script>
import bookService from "../services/book.service";

export default {
  data() {
    return {
      book: null
    };
  },
  created() {
    console.log("IMG HEREEEEE");
    const bookId = this.$route.params.id;
    this.book = bookService.getById(bookId);
  },
  name: "BookDetails",
  props: [],
  components: {}
};
</script>

<style scoped lang="scss">
.book-details-container {
  width: 80vw;
  background: grey;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
}

.book-details-container img {
  border-radius: 10px;
  transition: 1s;
}

.book-details-container img:hover {
  transform: scale(1.1);
  filter: brightness(1.6);
}

.book-details-container h2 {
  color: rgba(255, 255, 255, 0.459);
  font-size: 45px;
  margin-top: -10px;
}
.book-details-container span {
  color: rgba(117, 98, 98, 0.288);
  font-size: 15px;
  float: right;
}

.swing-in-top-fwd {
  -webkit-animation: swing-in-top-fwd 2.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-top-fwd 2.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation-delay: 0.5s;
}
.book-details-data {
  padding: 10px;
  margin-left: 10px;
  background: green;
}

@-webkit-keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}
@keyframes swing-in-top-fwd {
  0% {
    -webkit-transform: rotateX(-100deg);
    transform: rotateX(-100deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: top;
    transform-origin: top;
    opacity: 1;
  }
}
</style>
