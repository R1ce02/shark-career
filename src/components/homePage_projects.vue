<template>
  <div class="row" id="projects">
    <h5 class="greytxt">{{ $t("references.heading") }}</h5>
    <h2 class="title">{{ $t("references.subheading") }}</h2>

    <div class="col-sm">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ $t("references.porrtunity_heading") }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ $t("references.porrtunity_subheading") }}</h6>
          <p class="card-text">
            {{ $t("references.porrtunity_text") }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ $t("references.brr_heading") }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ $t("references.brr_subheading") }}
          </h6>
          <p class="card-text">
            {{ $t("references.brr_text") }}
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="row">
      <router-link :to="{ name: 'References' }">
        <div id="references" class="float-end" v-on:click="goToReferences">
          <p class="txt" style="margin-right: 5px">Our References</p>
          <i class="fas fa-arrow-right fa-md"></i>
        </div>
      </router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    goToReferences() {
      this.$router.push("References");
    },
  },
};
</script>

<style scoped>
.card {
  height: 100%;
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