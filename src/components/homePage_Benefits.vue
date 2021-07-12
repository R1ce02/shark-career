<template>
  <div id="benefits">
    <div class="row">
      <h1 class="title centeredtxt">Your Benefits</h1>
    </div>
    <div class="row">
      <div class="col-sm shadow-sm box rounded border">
        <span class=""><i class="fas fa-clock fa-3x"></i></span>
        <h2>Flexible Hours</h2>
      </div>
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-mug-hot fa-3x"></i>
        <h2>Snacks and Coffee In The Kitchen</h2>
      </div>
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-chart-line fa-3x"></i>
        <h2>Individual Improvement</h2>
      </div>
    </div>
    <div class="row" id="mid">
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-desktop fa-3x"></i>
        <h2>Ideal Equipment</h2>
      </div>
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-paper-plane fa-3x"></i>
        <h2>Interesting Projects</h2>
      </div>
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-smile-beam fa-3x"></i>
        <h2>Great Work Environment</h2>
      </div>
    </div>
  </div>
</template>


<style scoped>
#benefits{
  margin-bottom: 7vh;
} 

.box {
  margin: 0rem 1rem 0rem 1rem;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.col-sm h2 {
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1rem;
}

i {
  color: var(--main-accent);
}

#mid {
  margin-top: 1rem;
}

@media only screen and (max-width: 600px) {
  #mid {
    margin-top: 0rem;
  }
  .box {
    margin: 3px;
  }
}
</style>