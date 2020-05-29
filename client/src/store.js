import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: '',
    searchTerms: []
  },
  mutations: {
    setSearchQuery(state, value) {
      state.searchQuery = value;
    },
    fillSearchTerms(state, value) {
      state.searchTerms.push(value);
    }
  },
  actions: {
    isolateSearchQueries(context) {
      const term = context.state.searchQuery.replace(/\W/g, "");
      if (term === "" || term.length < 1) return;
      const array = context.state.searchQuery
        .toLowerCase()
        .trim()
        .split(" ");
      array.forEach(element => {
        if (!context.state.searchTerms.includes(element)) {
          context.commit('fillSearchTerms', element);
        }
      });
    }
  }
});