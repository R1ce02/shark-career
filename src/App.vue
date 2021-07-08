<template>
  <navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';


export default {
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  font-size: 100%;
}

.cat {
  color: grey;
  font-size: 1rem;
  font-weight: 500;
}

.title {
  font-weight: 500;
  font-size: 2rem;
}

.txt {
  font-size: 1.5rem;
}

/* non global */

</style>
