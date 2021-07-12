<template>
<div class="parent">
  <section>
    <image-box />
  </section>
  <section>
    <mission />
  </section>
  <section>
    <tools />
  </section>
  <section>
    <benefits />
  </section>
  <section>
    <projects />
  </section>
  <section>
    <offer />
  </section>
  <section>
    <places />
  </section>
  

  <div id="interestedStrip" class="container-fluid">
    <h3>Want To Join Our Team?</h3>
    <a href="mailto:rafi.kahn@shark-soft.com"
      ><button type="button" class="btn btn-outline-light">
        Contact Us
      </button></a
    >
  </div>
  </div>
</template>

<script>
import imageBox from "../components/homePage_Image.vue";
import mission from "../components/homePage_mission.vue";
import tools from "../components/homePage_Tools.vue";
import benefits from "../components/homePage_Benefits.vue";
import places from "../components/homePage_Places.vue";
import offer from "../components/homePage_Offer.vue"
import projects from "../components/homePage_projects.vue";

export default {
  components: {
    imageBox,
    mission,
    tools,
    benefits,
    places,
    offer,
    projects
  },
};
</script>

<style scoped>
#interestedStrip {
  background-color: #1d5097;
  text-align: center;
  color: white;
  padding: 3rem 0rem 3rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btn {
  margin-left: 3vw;
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  text-decoration-style: none;
  color: white;
}

a:hover {
  color: black;
}


/* .parent {
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
}

section {
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

} */


</style>