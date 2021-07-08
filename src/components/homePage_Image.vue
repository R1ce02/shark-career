<template>
  <div class="container-fluid no-padding">
    <img class="img-fluid" src="../assets/code-pic.png" />
    <h1>We Need <span class="test">Your Talent</span></h1>
  </div>
</template>

<style scoped>
.no-padding {
  padding-left: 0;
  padding-right: 0;
  margin: 0;
}

.container-fluid {
  position: relative;
  text-align: center;
  color: white;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 4rem;
}

img {
  filter: brightness(60%);
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}

.test {
  position: relative;
}

.test:after {
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1; /* Place the pseudo element right under the content */
  top: 0;
  left: 0;
  background: linear-gradient(to top, #1d5097 50%, transparent 50%);
  animation-name: highlight;
  animation-delay: 1s;
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-direction: alternate; /* Make the animation run back and forth */
}

@keyframes highlight {
  0% {
    width: 0;
    opacity: 0;
  }

  50% {
    width: 100%;
    opacity: 1;
  }

}



</style>