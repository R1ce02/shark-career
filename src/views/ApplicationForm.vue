<template>
  <div class="container" id="root">
    <h1 class="mb-4">Application For {{ $route.params.id }}</h1>
    <!-- <form id="form" enctype="multipart/form-data" :action="actionLink" method="post"> -->
    <!-- <form
      id="form"
      enctype="multipart/form-data"
      method="post"
      onsubmit="event.preventDefault();"
      v-on:submit="submitForm"
    > -->
    <form action="mailto:rafi.kahn@shark-soft.com" method="GET" enctype="application/x-www-form-urlencoded ">
      <label for="subject" >Subject:</label>
      <input id="subject" class="form-control mb-3" name="subject" type="text" :value="'Application For ' + $route.params.id" readonly/>
      <label for="body">Message:</label>
      <textarea class="form-control mb-3" name="body"></textarea>
      <input class="btn btn-primary" type="submit" value="Send" />
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
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      street: "",
      postal: "",
      city: "",
      actionLink:
        "http://192.168.0.194:105/api/application/" + this.$route.params.id,
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
      var formData = new FormData();
      var cv = document.querySelector("#fileCV");
      formData.append("fileCV", cv.files[0]);
      formData.append("fname", this.firstName);
      formData.append("lname", this.lastName);
      formData.append("email", this.email);
      formData.append("tel", this.tel);
      formData.append("address", this.street);
      formData.append("postal", this.postal);
      formData.append("city", this.city);
      axios.post(process.env.VUE_APP_API + "application/" + this.$route.params.id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((request) => console.log(request));
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
</style>