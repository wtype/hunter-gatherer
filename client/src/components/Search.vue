<template>
  <section>
    <form v-if="loading" @submit.prevent="isolateSearchQueries">
      <input v-model="query" autofocus="true" maxlength="100" placeholder="Loading items..." />
    </form>
    <form v-else @submit.prevent="isolateSearchQueries">
      <input v-model="query" autofocus="true" maxlength="100" placeholder="Enter search terms..." />
    </form>
    <div class="search-terms">
      <ul>
        <li v-for="term in searchTerms" :key="term" @click="removeTerm(term)">{{ term }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Search',
  mounted() {
    this.setAutoFocus();
    window.onresize = this.setAutoFocus;
  },
  computed: {
    query: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit('setSearchQuery', value);
      },
    },
    ...mapState(['searchQuery', 'searchTerms', 'loading']),
  },
  methods: {
    ...mapMutations(['removeTerm']),
    ...mapActions(['isolateSearchQueries']),
    setAutoFocus() {
      return this.isSmallScreen()
        ? document.querySelector('input').blur()
        : document.querySelector('input').focus();
    },
    isSmallScreen() {
      return (
        Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.documentElement.clientWidth
        ) < 900
      );
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
form {
  width: 100%;
}
input {
  width: 100%;
  background: inherit;
  border: none;
  font-size: 5rem;
  line-break: auto;
  white-space: pre-wrap;
}
input::placeholder {
  opacity: 0.1;
}
.search-terms ul {
  margin: 2rem 0;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}
.search-terms li {
  cursor: pointer;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  background: #baacff;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  box-shadow: 5px 5px 40px rgba(70, 70, 70, 0.15);
  transition: 100ms;
}
.search-terms li:hover {
  box-shadow: 5px 5px 45px rgba(70, 70, 70, 0.2);
  transform: translateY(-1.5px);
  filter: brightness(1.1) hue-rotate(10deg);
}
.search-terms li::selection {
  background: none;
  color: inherit;
}
@media (max-width: 700px) {
  .search-terms li {
    font-size: 2.5rem;
    padding: 1.5rem 2.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
