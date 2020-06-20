<template>
  <section class="filter-container">
    <input type="text" v-model="filterBy.searchStr" @input="filter" placeholder="Search" />
  </section>
</template>

<script>
export default {
  name: "book-filter",
  data() {
    return {
      filterBy: {
        searchStr: ""
      }
    };
  },
  methods: {
    filter() {
      this.$emit("filter", { ...this.filterBy });
    }
  }
};
</script>


<style>
.filter-container input {
  width: 30vw;
  border: none;
  text-align: center;
  font-size: 20px;
  outline: none;
  color: rgba(0, 0, 0, 0.699);
  border-bottom: 1px solid rgba(0, 0, 0, 0.432);
  height: 5vh;
}
</style>
