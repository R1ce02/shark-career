<template>
<div class="row" id="offer">
    <h2 class="title centeredtxt">Apply For Your Future</h2>
    <div class="row">
      <div class="col-sm">
        <h3 class="centeredtxt">For Students</h3>
        <p class="text">You want to gain experience in the field of IT alongside your studies? We are prepared to give you a part-time job and are ready to train you. Our team will keep your studies in mind and train you accordingly. If you are studying computer science apply above.</p>
      </div>
      <div class="col-sm">
        <h3 class="centeredtxt">For Interns</h3>
        <p class="text">Need a summer internship? You will be able to earn a great amount of practical experience with us. We will do our part in teaching and training you to the best of our capability. If you are a student of a school of higher technical education (HTL) and have the thirst to become better apply now above.</p>
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

