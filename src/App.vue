<template>
  <navbar />
  <image-box />
  <mission />
  <tools />
  <benefits />
  <places />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import imageBox from "./components/homePage_Image.vue";
import mission from "./components/homePage_mission.vue";
import tools from "./components/homePage_Tools.vue";
import benefits from "./components/homePage_Benefits.vue";
import places from "./components/homePage_Places.vue";

export default {
  components: {
    Navbar,
    imageBox,
    mission,
    tools,
    benefits,
    places
  },
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
