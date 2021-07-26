<template>
  <div id="benefits">
    <div class="row">
      <h1 class="title centeredtxt">Your Benefits</h1>
    </div>
    <div class="row">
      <div class="col-sm shadow-sm box rounded border">
        <span class=""><i class="fas fa-clock fa-3x"></i></span>
        <h2>Flexible Hours</h2>
        <div class="content">You have flexible working hours, which allows you to work when you find it best suiting your schedule.</div>
      </div>
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-mug-hot fa-3x"></i>
        <h2>Snacks and Coffee In The Kitchen</h2>
        <div class="content">We have all sorts of healthy snacks and food in our kitchen and of course we've got coffee ;)</div>
      </div>
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-chart-line fa-3x"></i>
        <h2>Individual Improvement</h2>
        <div class="content">We train and support our employees in their journey to knowledge and wisdom.</div>
      </div>
    </div>
    <div class="row" id="mid">
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-desktop fa-3x"></i>
        <h2>Ideal Equipment</h2>
        <div class="content">We choose our equipment to best suit your needs when you at work.</div>
      </div>
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-paper-plane fa-3x"></i>
        <h2>Interesting Projects</h2>
        <div class="content">We have great national and international partners for projects.</div>
      </div>
      <div class="col-sm shadow-sm box rounded border">
        <i class="fas fa-smile-beam fa-3x"></i>
        <h2>Great Work Environment</h2>
        <div class="content">We are all committed to excellence and have positive values.</div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#benefits{
  margin-bottom: 7vh;
} 

/* .row {
  height: 20vh;
} */

.box {
  margin: 0rem 1rem 0rem 1rem;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.col-sm h2 {
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1rem;
}

i {
  color: var(--main-accent);
  transition: all 1s;
}

.content {
  opacity: 0;
  display: none;
  margin: 0.5rem;
  transition: all 1s;
}


.box:hover .content {
  animation-name: fade;
  animation-duration: 1s;
  display: block;  
  animation-fill-mode: forwards;
}

.box:hover i{
  transform: translateY(-150%);
}

.box:hover h2{
  transform: translateY(-2vw);
  transition: all 1s;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(0);
  }  
  to {
    opacity: 1;
    transform: translateY(-3vw);
  }
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