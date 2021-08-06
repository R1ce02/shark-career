<template>
<div class="row" id="offer">
    <h2 class="title centeredtxt">{{ $t("heading.apply") }}</h2>
    <div class="row">
      <div class="col-sm">
        <h3 class="centeredtxt">{{ $t("heading.students") }}</h3>
        <p class="text">{{ $t("text.students") }}</p>
      </div>
      <div class="col-sm">
        <h3 class="centeredtxt">{{ $t("heading.interns") }}</h3>
        <p class="text">{{ $t("text.interns") }}</p>
      </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    goToVacancies() {
      this.$router.push('vacancies');
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 1.2rem;
}

#apply {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

#applyBtn {
  font-size: 1.2rem;
}
</style>

