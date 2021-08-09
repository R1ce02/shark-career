<template>
  <div id="vacancyList">
    <div v-bind:key="job.j_id" v-for="job in jobs" class="item border">
      <h4>{{ job.j_name }}</h4>
      <div id="options">
        <vue-recaptcha
          v-if="job.showRecaptcha"
          siteKey="6LdINMYbAAAAABYFiDV-xPlyDjTJhdNjPF9kvww_"
          size="normal"
          theme="light"
          :tabindex="0"
          @verify="verify(job.id)"
          @expire="recaptchaExpired(job.id)"
          @fail="recaptchaFailed"
          ref="vueRecaptcha"
        >
        </vue-recaptcha>
        <button class="btn btn-primary" v-if="!job.showRecaptcha" v-on:click="showCaptcha(job.id)">
          Apply
        </button>
        <a
        v-bind:href="'mailto:rafi.kahn@shark-soft.com?subject=Application For ' + job.j_name"
        v-if="job.verified"
        >
            <button type="button" class="btn btn-primary">Send Us an Email</button>
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import vueRecaptcha from "vue3-recaptcha2";

export default {
  data() {
    return {
      
      jobs: [
        {
          id: 1,
          j_name: "Java Full Stack Developer",
          showRecaptcha: false,
          verified: false
        },
        {
          id: 2,
          j_name: "UI/UX Developer",
          showRecaptcha: false,
          verified: false
        },
        {
          id: 3,
          j_name: "Part-Time Job",
          showRecaptcha: false,
          verified: false
        },
        {
          id: 4,
          j_name: "Internship",
          showRecaptcha: false,
          verified: false
        },
        {
          id: 5,
          j_name: "Unsolicited Application",
          showRecaptcha: false,
          verified: false
        },
      ],
    };
  },
  // mounted() {
  //     this.getJobs()
  // },
  mounted() {
    this.updateVisitCount()
  },
  methods: {
    // getJobs() {
    //     try {
    //         axios.get(process.env.VUE_APP_API + "jobs").then((response) => {
    //             response.data.forEach(element => {
    //                 this.jobs.push(element)
    //             });
    //         })
    //     } catch (error) {
    //         this.$toast.error('Please connect to an internet connection!');
    //     }
    // }
    updateVisitCount() {
      if(localStorage.getItem("VisitCount") === null) {
        localStorage.setItem("VisitCount", 1);
      } else {
        var count = parseInt(localStorage.getItem("VisitCount"))
        count = count + 1;
        localStorage.setItem("VisitCount", count)
      }
    },
    verify(id) {
      var selectedJob
      this.jobs.forEach((job) =>
        {  
          if (job.id === id) {
            selectedJob = job;
            job.verified = true
          }
        }
      )
      this.$router.push({ name: "Application", params: { id: selectedJob.j_name } })
    },
    showCaptcha(id) {
      var count = parseInt(localStorage.getItem("VisitCount"))
      if(count > 3) {
        this.jobs.forEach((job) =>
          {  
            if (job.id === id) job.showRecaptcha = true;
          }
        )
      } else {
        var selectedJob
        this.jobs.forEach((job) =>
        {  
          if (job.id === id) {
            selectedJob = job;
            job.verified = true
          }
        }
      )
        this.$router.push({ name: "Application", params: { id: selectedJob.j_name } })
      }
      
    },
    recaptchaExpired(id) {
        this.jobs.forEach((job) =>
        {  
          if (job.id === id) {
              job.showRecaptcha = false;
              job.verified = false;
          }
        }
      )
    },
    recaptchaFailed() {
        alert("Captcha Failed. Try Again!")
    }
  },
  components: {
    vueRecaptcha,
  },
};
</script>

<style scoped>
.item {
  margin: 1rem 0rem 1rem 0rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#options {
    display: flex;
    flex-direction: column;
}

h4 {
  margin-bottom: 0px;
}

#vacancyList {
  min-height: 450px;
}
</style>