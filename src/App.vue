<template>
  <navbar />
  <image-box />
  <div class="container">
    <h3>Our Mission</h3>
    <h2>Offer State of The Art IT Solutions to Our Customers</h2>
    <p>
      Our mission is to offer our customers a customised and specialised IT
      service. We customise our IT solutions to their needs and their
      priorities. We use new and promising tools to create and develop our
      products. <br> <br>Exciting challenges lie in our path and we are ready to take
      them on! <br>Join us on our journey...
    </p>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import imageBox from "./components/homePage_Image.vue";

export default {
  components: {
    Navbar,
    imageBox,
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

h3 {
  color: grey;
  font-size: 1.5rem;
  font-weight: 500;
}

h2 {
  font-weight: 600;
  font-size: 2rem;
}

p {
  font-size: 2rem;
}

.container {
  margin-top: 30px;
}
</style>
