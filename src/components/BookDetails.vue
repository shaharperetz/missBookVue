<template v-if="OK">
  <section class="flex col">
    <div v-if="book" class="book-details-container flex swing-in-top-fwd">
      <img :src="book.thumbnail" alt srcset />
      <div class="book-details-data flex col space-between">
        <h2>{{book.title}}</h2>
        <p>{{book.description}}</p>
        <div>
          <p>{{book.listPrice.isOnSale ? 'Price: ' + book.listPrice.amount : ''}}{{book.listPrice.isOnSale ? book.listPrice.currencyCode : ''}}</p>
          <span>Published at: {{book.publishedDate}}</span>
        </div>
      </div>
      <button class="flex a-center j-center" @click="goBack">X</button>
    </div>
    <div v-if="book" class="book-rating">
      <p>{{book.rating ? `This book has ${book.rating} stars` : 'No Rating yet'}}</p>
    </div>
    <BookRating
      :grade="book.rating ? book.rating : 3"
      :maxStars="5"
      :hasCounter="true"
      :book="book"
    />
  </section>
</template>

<script>
import BookRating from "./BookRating.vue";
import bookService from "../services/book.service";

export default {
  name: "book-details",
  components: {
    BookRating
  },
  data() {
    return {
      book: null
    };
  },
  async created() {
    const bookId = this.$route.params.id;
    this.book = await bookService.getById(bookId);
  },
  methods: {
    goBack() {
      console.log("GOING BACK");
      this.$router.push("/");
    }
  },
  watch() {
    this.book.rating;
  }
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
  width: 20vw;
  transition: 1s;
}

.book-details-container img:hover {
  transform: scale(1.1);
  filter: brightness(1.3);
}
.book-details-container button {
  height: 3vh;
  width: 3vh;
  margin-right: -1vw;
  margin-top: -1vw;
  font-weight: bold;
  color: rgba(34, 33, 33, 0.637);
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0);
  text-align: center;
  border: none;
  cursor: pointer;
}

.book-details-container button:hover {
  color: rgba(168, 167, 167, 0.637);
}
.book-details-container h2 {
  color: rgba(255, 255, 255, 0.459);
  font-size: 45px;
  margin-top: -10px;
  padding: 5px 0px;
  border-bottom: 1px solid rgba(92, 92, 92, 0.13);
}
.book-details-container span {
  color: rgba(34, 34, 36, 0.692);
  font-size: 15px;
  position: relative;
  bottom: -2vh;
  left: -25vw;
  //   justify-self: flex-start;
  //   right: -25vw;
}

.swing-in-top-fwd {
  -webkit-animation: swing-in-top-fwd 2.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: swing-in-top-fwd 2.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation-delay: 0.2s;
}
.book-details-data {
  padding: 10px;
  margin-left: 10px;
  width: 80vw;
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
