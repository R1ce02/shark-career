<template>
  <div class="container pt-3" id="root" style="max-width: 900px">
    <h1 class="mb-4">Application For {{ $route.params.id }}</h1>
    <!-- <form id="form" enctype="multipart/form-data" :action="actionLink" method="post"> -->
    <!-- <form
      id="form"
      enctype="multipart/form-data"
      method="post"
      onsubmit="event.preventDefault();"
      v-on:submit="submitForm"
    > -->
    <form method="POST" enctype="text/plain" onsubmit="event.preventDefault();"
      v-on:submit="submitForm">
      <label for="subject" >Subject:</label>
      <input id="subject" class="form-control mb-3" name="subject" type="text" :value="subject" readonly/>
      <label for="firstname">First Name:</label>
      <input id="firstname" class="form-control mb-3" name="firstname" type="text" v-model="firstname" required/>
      <label for="lastname">Last Name:</label>
      <input id="lastname" class="form-control mb-3" name="lastname" type="text" v-model="lastname" required/>
      <label for="email">Email Address:</label>
      <input id="email" class="form-control mb-3 " name="email" type="email" v-model="emailFrom"/>
      <label for="telephone">Telephone:</label>
      <input id="telephone" class="form-control mb-3 " name="telephone" type="tel" oninvalid="setCustomValidity('Please check your number.')" oninput="setCustomValidity('')" v-model="telephone"/>
      <label for="body">Your Application:</label>
      <textarea id="body" class="form-control mb-3" name="body" type="text" v-model="body" style="min-height: 220px;" />
      
      <input class="btn btn-primary" type="submit" value="Submit Application"/>
    </form>
     
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      job: {
        id: 0,
        name: "",
      },
      subject: 'Application For ' + this.$route.params.id,
      firstname: "",
      lastname: "",
      emailFrom: "",
      telephone: "",
      body: ""
    };
  },
  mounted() {
    this.getJob();
  },
  methods: {
    getJob() {
      // axios
      //   .get(process.env.VUE_APP_API + "jobs/" + this.$route.params.id)
      //   .then((response) => {
      //     var data = response.data[0];
      //     this.job.id = data.j_id;
      //     this.job.name = data.j_name;
      //   });

    },
    submitForm() {
      // var formData = new FormData();
      // var cv = document.querySelector("#fileCV");
      // formData.append("fileCV", cv.files[0]);
      // formData.append("fname", this.firstName);
      // formData.append("lname", this.lastName);
      // formData.append("email", this.email);
      // formData.append("tel", this.tel);
      // formData.append("address", this.street);
      // formData.append("postal", this.postal);
      // formData.append("city", this.city);
      // axios.post(process.env.VUE_APP_API + "application/" + this.$route.params.id, formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   }
      // }).then((request) => console.log(request));
      var data = {
        subject: this.subject,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.emailFrom,
        telephone: this.telephone,
        body: this.body
      };
      try {
        axios.post(process.env.VUE_APP_API + "sendmail/", data).then((request) => {
          if(request["status"] === 200) {
            this.$toast.show("Successfully submitted application");
            this.$router.push({ name: "Home" })
          }
          }
        )
      } catch(error) {
        this.$toast.warning("Failed to send application!");
      }
    },
  },
};
</script>

<style scoped>
#root {
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 500px;
  justify-content: center;
  width: 100%;
}

.group {
  margin-bottom: 1.2rem;
}

.container {
  height: 100%;
}
</style>