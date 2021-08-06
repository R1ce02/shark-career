<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top" style="background-color: var(--sharks-color);">
  <div class="container-fluid d-flex justify-content-around">
    <a class="navbar-brand" href="#">
      <img src="@/assets/shark_logo.png" alt="" height="40">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" v-on:click="goToHome">{{ $t("message.home") }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " v-on:click="goToReferences">{{ $t("message.ref") }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " v-on:click="goToSolutions">{{ $t("message.solutions") }}</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" :v-model="$i18n" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{$i18n.locale}}
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li v-on:click="changeLang('en')"><a class="dropdown-item" >EN</a></li>
            <li><a class="dropdown-item" v-on:click="changeLang('de')">DE</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <div style="margin-top: 66px;">
    <router-view id="mainContent" />
  </div>
</template>

<script>

export default {
methods: {
  goToReferences() {
    this.$router.push({ name:'References' });
  },
  goToHome() {
    this.$router.push({ name: 'Home'});
  }, goToVacancies() {
    this.$router.push({ name: 'Vacancies' });
  }, goToSolutions() {
    this.$router.push({ name: 'Solutions' });
  }, changeLang(lang) {
    this.$i18n.locale = lang;
  }
}
};
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  font-size: 100%;
  height: 100%;
}

html, body {
  background-color: var(--background-color);
  color: var(--font-color);
  height: 100%;
}

:root {
  --main-accent: #3C1874;
  --background-color: #FFFFFF;
  --font-color: #283747;
  --sharks-color: #1d5097;
}

.greytxt {
  color: var(--main-accent);
  font-size: 16px;
  text-transform: uppercase;
}

.title {
  font-weight: 500;
  font-size: 2rem;
}

.txt {
  font-size: 1.3rem;
  font-weight: 400;
}

.centeredtxt {
  text-align: center;
}

.nav-item {
  text-transform: uppercase;
}

#mainContent {
  margin-top: 63px;
}


@media only screen and (max-width: 600px) {
  .title {
    font-size: 24px;
  }

  .txt {
    font-size: 20px;
  }
}

.nav-link {
  cursor: pointer;
}

/* underline on hover animation */
.underline {
  color: var(--main-accent);
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}
.underline:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  height: 2px;
  left: 50%;
  position: absolute;
  background: var(--main-accent);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.underline:hover:after { 
  width: 100%; 
  left: 0; 
}
@media screen and (max-height: 300px) {
	ul {
		margin-top: 40px;
	}
}
</style>
