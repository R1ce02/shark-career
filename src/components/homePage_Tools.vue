<template>
    <div class="row" id="tools">
      <div class="col-lg-4">
        <h5 class="greytxt">{{ $t("subheading.tools") }}</h5>
        <h2 class="title">{{ $t("heading.tools") }}</h2>
        <p class="txt">
          {{ $t("text.tools1") }}<br />
          <br />
          {{ $t("text.tools2") }}
        </p>
      </div>
      <div class="col-lg-8">
        <div id="logosBox" class="rounded">
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image1.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image2.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image3.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image4.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image5.png"
          />
          <img
            id="oracle"
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image7.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image6.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image9.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image8.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image10.png"
          />
          <img
            class="img-fluid logo"
            src="@/assets/Grayscale_icons/image11.png"
          />
        </div>
      </div>
    </div>

</template>

<script>
export default {
  mounted() {
    this.observeEntrance();
  },
  methods: {
    arise(entry) {
      entry.forEach((change) => {
        change.target.classList.add("rising");
      });
    },
    observeEntrance() {
      let options = {
        root: null, // Sets the framing element to the viewport
        rootMargin: "0px",
        threshold: [1],
      };

      let observer = new IntersectionObserver(this.arise, options);

      let element = document.querySelector("#logosBox");

      observer.observe(element);
    },
  },
};
</script>

<style scoped>

#logosBox {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.logo {
  margin: 2rem;
  height: 60px;
  width: auto;
}

.rising {
  animation-name: shadow;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes shadow {
  0% {
    box-shadow: none;
  }

  100% {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
}

#oracle {
  height: 40px;
}

@media only screen and (max-width: 600px) {

  .col-4 {
    padding-right: 0px;
  }

  .logo {
    height: 40px;
    margin: 0.8rem;
  }

  #oracle {
    height: 30px;
  }
}
</style>