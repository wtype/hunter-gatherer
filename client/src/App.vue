<template>
  <main>
    <Header />
    <Search />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    Header,
    Search
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: rgb(199, 194, 185);
  color: #212121;
  font-family: helvetica, -apple-system, BlinkMacSystemFont, sans-serif;
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
</style>
