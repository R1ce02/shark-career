<template>
  <navbar />
  <div class="container-fluid no-padding">
    <img class="img-fluid " src="./assets/code-pic.png"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.no-padding {
  padding-left: 0;
  padding-right: 0;
  margin: 0;
}
</style>
