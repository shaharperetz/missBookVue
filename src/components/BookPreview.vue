<template>
  <div>
    <div v-if="!isAdd" class="book-card flex a-center">
      <img @click="goToDetails(book.id)" :src="book.thumbnail" alt srcset />
      <div class="book-card-data flex col">
        <h2>{{ book.title }}</h2>
        <span>{{ book.publishedDate }}</span>
        <p class="book-desc" id="style-3">{{ book.description }}</p>
      </div>

      <div class="more-options">
        <img
          title="Delete"
          class="remove-button"
          src="../assets/delete.svg"
          @click.stop="onRemoveBook(book.id)"
          alt
          srcset
        />

        <router-link class="edit-button" :to="'/edit/' + book.id">
          <img
            title="Edit"
            src="../assets/register.svg"
            @click.stop="onRemoveBook(book.id)"
            alt
            srcset
          />
        </router-link>
      </div>
    </div>

    <div v-if="isAdd" class="book-card-add flex a-center">
      <button @click="addBook(book)">ADD BOOK</button>
      <img @click="goToDetails(book.id)" :src="book.volumeInfo.imageLinks.thumbnail" alt srcset />
      <div class="book-card-add-data flex col">
        <h2>{{ book.volumeInfo.title }}</h2>
        <span>{{ book.volumeInfo.publishedDate }}</span>
        <p>{{ book.volumeInfo.description }}</p>
      </div>
    </div>
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
  props: ["book", "isAddProp"],

  methods: {
    async addBook(book) {
      this.$notify({
        group: "book-add",
        title: "Book Saved!",
        text: `The Book was Added to your collection!`
      });

      await this.$store.dispatch({ type: "addBook", book });
    },

    goToDetails(id) {
      console.log("goToDetails -> id", id);
      this.$router.push(`/details/${id}`);
    },
    onRemoveBook(bookId) {
      this.$store.dispatch({ type: "removeBook", bookId });
    }
  },

  created() {
    console.log("created -> isAdd", this.isAddProp);
    if (this.isAddProp) {
      this.isAdd = true;
    }
  }
};
</script>

<style scoped lang="scss">
.book-card {
  // height: 10vw;
  position: relative;
  width: 30vw;
  background-color: rgba(0, 128, 0, 0.192);
  margin: 20px;
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

.more-options {
  width: 2vw;
  margin-right: -1vw;
  height: 5vh;
  background: rgb(53, 59, 72);
  transition: 2s;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.more-options:hover {
  background: rgba(53, 59, 72, 0);
  width: 2vw;
  height: 4vw;
  opacity: 1;
}

.remove-button {
  position: absolute;
  top: -45%;
  right: 0px;
  width: 25px;
}

.edit-button {
  position: absolute;
  top: 0px;
  right: 2vw;
  text-decoration: none;
  color: black;
  margin-top: -1vh;
}

.edit-button img {
  width: 20px;
  height: 35px;
  padding: 0px;
  // margin-right: -15px;
  // margin-top: -50%;
}
</style>
