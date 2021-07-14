<template>
  <div class="row" id="projects">
    <h5 class="greytxt">Our Projects</h5>
    <h2 class="title">Check Out Some of Our Previous Projects</h2>

    <div class="col-sm">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Project: PORRtunity+</h5>
          <h6 class="card-subtitle mb-2 text-muted">A Project With Porr AG</h6>
          <p class="card-text">
            The main goal of this project was to migrate and redesign a legacy
            system, which is an existing database, to optimise its speed and
            ease of use.
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Project: IVV Migration to Java/Linux</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            A Project With Bundesrechenzentrum GmbH
          </h6>
          <p class="card-text">
            The main goal of this project was to redesign and renew an older
            website's frontend and backend. Java was used to create the backend.
            The frontend was renewed to access the new backend and the design
            was modernised.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <router-link :to='{ name:"References" }'>
      <div id="references" class="float-end" v-on:click="goToReferences">
        <p class="txt" style="margin-right: 5px">Our References</p>
        <i class="fas fa-arrow-right fa-md"></i>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToReferences() {
      this.$router.push("References")
    }
  }
}
</script>

<style scoped>
.container {
  margin-bottom: 100px;
}

.card {
  height: 100%;
}

#projects {
  margin-bottom: 7vh;
}

#references {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  vertical-align: middle;
  margin-left: auto;
  margin-right: 0px;
}

#references p {
  margin-bottom: 0px;
}
</style>