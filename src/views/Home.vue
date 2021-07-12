<template>
  <div class="parent">
    <image-box />

    <div class="container">
      <div class="row" id="mission">
        <h5 class="greytxt">Our Mission</h5>
        <h2 class="title">Provide Others With Supercharged IT Services</h2>
        <p class="txt">
          Our mission is to offer our customers a customised and specialised IT
          service. We customise our IT solutions to their needs and their
          priorities. We use new and promising tools to create and develop our
          products. <br />
          <br />Exciting challenges lie in our path and we are ready to take
          them on! <br />Join us on our journey...
        </p>
      </div>

      <tools />
      <projects />
      <benefits />
      
      <offer />

      <div class="row" id="places">
        <h2 class="title centeredtxt">Our Places</h2>

        <div class="col">
          <p class="txt centeredtxt">
            Wollzeile 25 / 27 (Mezzanin)<br />1010 Wien
          </p>
        </div>

        <div class="col">
          <p class="txt centeredtxt">
            Lenaugasse 12 <br />3400 Weidling/Klosterneuburg
          </p>
        </div>
      </div>
    </div>
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
import tools from "../components/homePage_Tools.vue";
import benefits from "../components/homePage_Benefits.vue";
import offer from "../components/homePage_Offer.vue";
import projects from "../components/homePage_projects.vue";

export default {
  components: {
    imageBox,
    tools,
    benefits,
    offer,
    projects,
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

#mission {
  margin-top: 7vh;
  margin-bottom: 7vh;
}

#places {
  margin-bottom: 7vh;
}
</style>