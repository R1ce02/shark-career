<template>
  <div class="container-fluid no-padding">
    <img class="img-fluid" src="../assets/code-pic.png" />
    <h1>We Need Your Talent</h1>
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
</style>