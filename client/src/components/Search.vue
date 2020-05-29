<template>
  <form @submit.prevent="isolateSearchQueries">
    <input v-model="query" autofocus="true" maxlength="100" />
    <h1 v-if="searchTerms.length">{{searchTerms}}</h1>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Search",
  computed: {
    query: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit("setSearchQuery", value);
      }
    },
    ...mapState(["searchQuery", "searchTerms"])
  },
  methods: {
    ...mapActions(["isolateSearchQueries"])
  }
};
</script>

<style scoped>
:focus,
:active {
  outline: none;
}
form {
  max-width: 100rem;
}
input {
  background: inherit;
  border: none;
  font-size: 5rem;
  line-break: auto;
  white-space: pre-wrap;
}
h1 {
  color: #f1966f;
}
</style>