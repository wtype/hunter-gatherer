<template>
  <section>
    <form @submit.prevent="isolateSearchQueries">
      <input v-model="query" autofocus="true" maxlength="100" />
    </form>
    <div class="searchTerms">
      <ul>
        <li v-for="term in searchTerms" :key="term">{{term}}</li>
      </ul>
    </div>
  </section>
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
.searchTerms ul {
  max-width: 80vw;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}
.searchTerms li {
  cursor: cell;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  background: #f1966f;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  box-shadow: 10px 10px 100px rgba(100, 100, 100, 0.25);
}
.searchTerms li:hover {
  filter: hue-rotate(-30deg);
}
</style>