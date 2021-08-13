<template>
  <div id="benefits">
    <div class="row">
      <h1 class="title centeredtxt">{{ $t("heading.benefits") }}</h1>
    </div>
    <div class="row" id="content">
      <div class="col-lg shadow-sm box rounded border">
        <span class=""><i class="fas fa-clock fa-3x"></i></span>
        <h4>{{ $t("heading.flexi") }}</h4>
        <div class="content">{{ $t("text.flexi") }}</div>
      </div>
      <div class="col-lg shadow-sm box rounded border">
        <i class="fas fa-mug-hot fa-3x"></i>
        <h4>{{ $t("heading.snacks") }}</h4>
        <div class="content">{{ $t("text.snacks") }}</div>
      </div>
      <div class="col-lg shadow-sm box rounded border">
        <i class="fas fa-chart-line fa-3x"></i>
        <h4>{{ $t("heading.improvement") }}</h4>
        <div class="content">{{ $t("text.improvement") }}</div>
      </div>
    </div>
    <div class="row" id="mid">
      <div class="col-lg shadow-sm box rounded border">
        <i class="fas fa-desktop fa-3x"></i>
        <h4>{{ $t("heading.equipment") }}</h4>
        <div class="content">{{ $t("text.equipment") }}</div>
      </div>
      <div class="col-lg shadow-sm box rounded border">
        <i class="fas fa-paper-plane fa-3x"></i>
        <h4>{{ $t("heading.projects") }}</h4>
        <div class="content">{{ $t("text.projects") }}</div>
      </div>
      <div class="col-lg shadow-sm box rounded border">
        <i class="fas fa-smile-beam fa-3x"></i>
        <h4>{{ $t("heading.environment") }}</h4>
        <div class="content">{{ $t("text.environment") }}</div>
      </div>
    </div>
  </div>
</template>


<style scoped>

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
  padding: 50px;
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
  transform: translateY(-200px);
}

.box:hover h4{
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
    transform: translateY(-2vw);
  }
}

#mid {
  margin-top: 1rem;
}

/* @media only screen and (max-width: 600px) {
  #mid {
    margin-top: 0rem;
  }
  .box {
    margin: 3px;
  }
} */
</style>