import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: '',
    searchTerms: [],
  },
  mutations: {
    setSearchQuery(state, value) {
      state.searchQuery = value;
    },
    fillSearchTerms(state, value) {
      state.searchTerms.push(value);
    },
    removeTerm(state, value) {
      state.searchTerms.splice(state.searchTerms.indexOf(value), 1);
    },
  },
  actions: {
    sendSearch(context) {
      const url = 'http://localhost:9090/search';
      const payload = context.state.searchTerms;

      if (!(payload.length > 0 && payload.length < 50)) return;

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => console.log(response))
        .catch(error => console.log('ERROR: ', error));
    },
    isolateSearchQueries(context) {
      const term = context.state.searchQuery.replace(/\W/g, '');
      if (term === '' || term.length < 1) return;
      const queries = context.state.searchQuery
        .toLowerCase()
        .trim()
        .replace(/[ ]{2,}/g)
        .split(' ');
      queries.forEach(element => {
        if (!context.state.searchTerms.includes(element)) {
          context.commit('fillSearchTerms', element);
          context.commit('setSearchQuery', '');
        }
      });
      context.dispatch('sendSearch');
    },
  },
});
