import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: '',
    searchTerms: [],
    loading: false,
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
    setLoading(state, value) {
      state.loading = value;
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
        .then(response => {
          console.log(response);
          context.commit('setLoading', false);
        })
        .catch(error => console.log('ERROR: ', error));
    },
    isolateSearchQueries(context) {
      const queries = context.state.searchQuery
        .toLowerCase()
        .trim()
        .replace(/[ ]{2,}/g)
        .replace(/[^\w\s]|_/g, '')
        .split(' ');

      if (!queries.length) return;

      queries.forEach(element => {
        if (element.trim() === '' || element === 'undefined') {
          context.commit('setSearchQuery', '');
          return;
        } else if (!context.state.searchTerms.includes(element)) {
          context.commit('fillSearchTerms', element);
          context.commit('setSearchQuery', '');
          context.commit('setLoading', true);
        }
      });
      context.dispatch('sendSearch');
    },
  },
});
