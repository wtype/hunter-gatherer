<template>
  <main role="main">
    <Header />
    <Search />
    <Results />
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: {
    Header,
    Search,
    Results,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  font-size: 16px;
}
::selection {
  background: #0e0e1c;
  color: rgb(240, 242, 255);
}
:focus,
:active {
  outline: none;
}
body {
  background: rgb(250, 250, 255);
  color: #0e0e1c;
  font-family: helvetica, -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-overflow-scrolling: touch;
  -webkit-font-smoothing: antialiased;
}
main {
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  padding: 5vmin;
  height: 100vh;
  overflow: hidden;
}
@media (max-width: 1000px) {
  :root {
    font-size: 13px;
  }
}
@media (max-width: 700px) {
  :root {
    font-size: 8px;
  }
}
</style>
