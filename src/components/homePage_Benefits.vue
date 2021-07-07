<template>
  <div class="container">
    <div class="row">
      <h1 id="title" class="title">Your Benefits</h1>
    </div>
    <div class="row" style="margin-top: 1rem;">
      <div class="col shadow-sm box rounded border">
        <img class="imgIcon" src="../assets/benefits_icons/clock.svg" />
        <h2>Flexible Hours</h2>
      </div>
      <div class="col shadow-sm box rounded border">
        <img class="imgIcon" src="../assets/benefits_icons/coffee-cup.svg" />
        <h2>Snacks and Coffee In The Kitchen</h2>
      </div>
      <div class="col shadow-sm box rounded border">
        <img class="imgIcon" src="../assets/benefits_icons/arrow-up.svg" />
        <h2>Individual Improvement</h2>
      </div>
    </div>
    <div class="row" style="margin-top: 3rem">
      <div class="col shadow-sm box rounded border">
        <img class="imgIcon" src="../assets/benefits_icons/monitor.svg" />
        <h2>Ideal Equipment</h2>
      </div>
      <div class="col shadow-sm box rounded border">
        <img class="imgIcon" src="../assets/benefits_icons/project.svg" />
        <h2>Interesting Projects</h2>
      </div>
      <div class="col shadow-sm box rounded border">
        <img class="imgIcon" src="../assets/benefits_icons/happy.svg" />
        <h2>Great Work Environment</h2>
      </div>
    </div>
  </div>
</template>


<style scoped>
#title {
  text-align: center;
}

.container {
  margin-bottom: 100px;
}

.box {
    display: inline-block;
  margin: 0px 30px 0px 30px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.imgIcon {
  height: 80px;
  width: 80px;
  margin-top: 0.5rem;
}

.col h2 {
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1rem;
}
</style>