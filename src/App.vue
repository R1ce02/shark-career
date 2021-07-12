<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark shadow"
    style="background: var(--main-accent)"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/shark_logo.png" height="35" />
      </a>
      <!-- <button type="button" class="btn btn-outline-light" v-on:click="goToApplicationPage">Apply Now</button> -->
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {

};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  font-size: 100%;
  background-color: var(--background-color);
  color: black;
}

:root {
  --main-accent: #1d5097;
  --background-color: #FFFFFF;

}

.greytxt {
  color: grey;
}

.title {
  font-weight: 500;
  font-size: 2rem;
}

.txt {
  font-size: 1.5rem;
}

.centeredtxt {
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 24px;
  }

  .txt {
    font-size: 20px;
  }
}

/* non global */

</style>
