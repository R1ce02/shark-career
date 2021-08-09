<template>
  <div class="parent">
    <image-box />

    <div class="container mt-3">
      <h2 class="title">{{ $t("heading.open") }}</h2>
      <div id="jobs" class="px-3 border" style="min-height=280px;">
        
        <vacancies />
      </div>

      <div class="row my-5" id="mission">
        <h5 class="greytxt">{{ $t("subheading.mission") }}</h5>
        <h2 class="title">{{ $t("heading.mission") }}</h2>
        <p class="txt">
          {{ $t("text.mission") }}
        </p>
      </div>

      <tools class="mb-5"/>
      <benefits class="mb-5"/>
      <offer class="mb-5"/>
      
      <h2 class="title centeredtxt">{{ $t("heading.location") }}</h2>
      <div class="row">
        <div class="col">
          <p class="address">
            Wollzeile 25 / 27 (Mezzanin)<br />1010 Wien
          </p>
        </div>
        <div class="col">
          <p class="address">
            Lenaugasse 12<br />3400 Klosterneuburg
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
import vacancies from "../components/homePage_vacancies.vue";

export default {
  components: {
    imageBox,
    tools,
    benefits,
    offer,
    vacancies
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

#jobs {
  overflow-y: scroll;
  
}

.btn {
  margin-left: 3vw;
  font-size: 1.5rem;
}

p.address {
  font-size: 1.5rem;
  text-align: center;
}

a {
  text-decoration: none;
  text-decoration-style: none;
  color: white;
}

a:hover {
  color: black;
}
</style>