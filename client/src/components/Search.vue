<template>
  <section>
    <form @submit.prevent="isolateSearchQueries">
      <input v-model="query" autofocus="true" maxlength="100" />
    </form>
    <div class="searchTerms">
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
  computed: {
    query: {
      get() {
        return this.$store.state.searchQuery;
      },
      set(value) {
        this.$store.commit('setSearchQuery', value);
      },
    },
    ...mapState(['searchQuery', 'searchTerms']),
  },
  methods: {
    ...mapMutations(['removeTerm']),
    ...mapActions(['isolateSearchQueries']),
  },
};
</script>

<style scoped>
:focus,
:active {
  outline: none;
}
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
.searchTerms ul {
  margin: 2rem 0;
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}
.searchTerms li {
  cursor: default;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  background: #ffb57c;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  text-transform: capitalize;
  box-shadow: 5px 5px 40px rgba(70, 70, 70, 0.15);
  transition: 100ms;
}
.searchTerms li:hover {
  box-shadow: 5px 5px 45px rgba(70, 70, 70, 0.2);
  transform: translateY(-1.5px);
  filter: brightness(1.05);
  text-decoration: line-through;
}
</style>
