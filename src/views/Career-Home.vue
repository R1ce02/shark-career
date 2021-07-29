<template>
  <div class="parent">
    <image-box />

    <div class="container mt-3">
      <h2 class="title">Open Vacancies</h2>
      <div id="jobs" class="px-3 border">
        
        <vacancies />
      </div>

      <div class="row my-5" id="mission">
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

      <tools class="mb-5"/>
      <benefits class="mb-5"/>
      <offer class="mb-5"/>
      
      <h2 class="title centeredtxt">Our Locations</h2>
      <div class="row">
        <div class="col-md-8 centeredtxt">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.9106120391357!2d16.37487381582004!3d48.20833765420869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079fea63e09b%3A0xa190ad51a3039792!2sWollzeile%2025%2C%201010%20Wien!5e0!3m2!1sen!2sat!4v1627539822699!5m2!1sen!2sat" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center">
          <p class="address">
            Wollzeile 25 / 27 (Mezzanin)<br />1010 Wien
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 centeredtxt">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.583142689436!2d16.305092315822247!3d48.2916350483972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d0ed9dc3d184f%3A0xdd7de1d9cbcd065b!2sLenaugasse%2012%2C%203400%20Klosterneuburg!5e0!3m2!1sen!2sat!4v1627541920021!5m2!1sen!2sat" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="col-md-4 d-flex justify-content-center align-items-center">
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