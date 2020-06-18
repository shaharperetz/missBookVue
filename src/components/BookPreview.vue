<template>
  <div>
    <div v-if="!isAdd" class="book-card flex a-center">
      <img @click="goToDetails(book.id)" :src="book.thumbnail" alt srcset />
      <div class="book-card-data flex col">
        <h2>{{book.title}}</h2>
        <span>{{book.publishedDate}}</span>
        <p class="book-desc" id="style-3">{{book.description}}</p>
      </div>
    </div>

    <div v-if="isAdd" class="book-card-add flex a-center">
      <img @click="goToDetails(book.id)" :src="book.volumeInfo.imageLinks.thumbnail" alt srcset />
      <div class="book-card-add-data flex col">
        <h2>{{book.volumeInfo.title}}</h2>
        <span>{{book.volumeInfo.publishedDate}}</span>
        <p>{{book.volumeInfo.description}}</p>
      </div>
    </div>
    <button class="remove-button" @click="onRemoveBook(book.id)">remove book</button>
    <router-link :to="'/edit/'+book.id">Edit</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdd: false
    };
  },

  name: "BookPreview",
  props: ["book"],

  methods: {
    goToDetails(id) {
      console.log("goToDetails -> id", id);
      this.$router.push(`/details/${id}`);
    },
    onRemoveBook(bookId) {
      this.$store.dispatch({ type: "removeBook", bookId });
    }
  },

  created() {
    let isAdd = this.$route.name;
    if (isAdd === "add-book") {
      console.log("BOOK ADD MODE ON");
      this.isAdd = true;
    }
    console.log("created -> isAdd ", isAdd);
  }
};
</script>

<style scoped lang="scss">
.book-card {
  // height: 10vw;
  width: 30vw;
  background-color: rgba(0, 128, 0, 0.192);
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 11px -3px #00000062;
}

.book-card img {
  cursor: pointer;
  height: 30vh;
  border-radius: 10px;
  transition: 1s;
}
.book-card img:hover {
  transform: scale(1.1);
  filter: brightness(1.6);
}

.book-card-data {
  width: 100%;
  // padding: 15px;
  height: 30vh;
}

.book-card-data h2 {
  justify-self: start;
}
.book-card-data p {
  padding: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.book-card-add {
  // height: 10vw;
  width: 30vw;
  font-size: 15px;
  background-color: rgba(0, 128, 0, 0.192);
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 11px -3px #00000062;
}

.book-card-add-data {
  width: 100%;
  // padding: 15px;
  height: 30vh;
}

.book-card-add-data h2 {
  justify-self: start;
  font-size: 15px;
}
.book-card-add-data p {
  padding: 0px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.book-desc {
  overflow-y: scroll;
}

#style-3::-webkit-scrollbar-thumb {
  background-color: #000000;
}

.remove-button {
  // float: bottom right;
}
</style>
