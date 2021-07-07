<template>
  <div class="container">
    <div class="row">
      <h1 id="title" class="title">Your Benefits</h1>
    </div>
    <div class="row">
      <div class="col shadow-sm box rounded">
        <img class="imgIcon" src="../assets/benefits_icons/clock.svg" />
        <h2>Flexible Hours</h2>
      </div>
      <div class="col shadow-sm box rounded">
        <img class="imgIcon" src="../assets/benefits_icons/coffee-cup.svg" />
        <h2>Snacks and Coffee In The Kitchen</h2>
      </div>
      <div class="col shadow-sm box rounded">
        <img class="imgIcon" src="../assets/benefits_icons/arrow-up.svg" />
        <h2>Individual Improvement</h2>
      </div>
    </div>
    <div class="row" style="margin-top: 3rem">
      <div class="col shadow-sm box rounded">
        <img class="imgIcon" src="../assets/benefits_icons/monitor.svg" />
        <h2>Ideal Equipment</h2>
      </div>
      <div class="col shadow-sm box rounded">
        <img class="imgIcon" src="../assets/benefits_icons/project.svg" />
        <h2>Interesting Projects</h2>
      </div>
      <div class="col shadow-sm box rounded">
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
  margin: 0px 30px 0px 30px;
  padding: 20px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imgIcon {
  height: 80px;
  width: 80px;
}

.col h2 {
  margin-top: 1rem;
  font-weight: 500;
  font-size: 1.5rem;
}
</style>