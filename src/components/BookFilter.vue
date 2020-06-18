<template>
  <section>
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

