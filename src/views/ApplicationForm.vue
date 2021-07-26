<template>
  <div class="container" id="root">
    <h1 class="mb-4">Application For {{ job.name }}</h1>
    <!-- <form id="form" enctype="multipart/form-data" :action="actionLink" method="post"> -->
    <!-- <form
      id="form"
      enctype="multipart/form-data"
      method="post"
      onsubmit="event.preventDefault();"
      v-on:submit="submitForm"
    > -->
    <form action="mailto:rafi.kahn@shark-soft.com" method="GET">
      <div class="group">
        <label for="fname" class="form-label">First Name *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Max"
          name="fname"
          id="fname"
          v-model="firstName"
          required
        />
      </div>
      <div class="group">
        <label for="lname" class="form-label">Last Name *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Mustermann"
          name="lname"
          id="lname"
          v-model="lastName"
          required
        />
      </div>
      <div class="group">
        <label for="email" class="form-label">Email *</label>
        <input
          type="text"
          class="form-control"
          placeholder="example@example.com"
          name="email"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="group">
        <label for="tel" class="form-label">Phone *</label>
        <input
          type="text"
          class="form-control"
          placeholder="+43 ..."
          id="tel"
          name="tel"
          v-model="tel"
          required
        />
      </div>
      <div class="group">
        <label for="address" class="form-label">Address *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Street..."
          id="address"
          name="address"
          v-model="street"
          required
        />
      </div>
      <div class="group">
        <label for="postal" class="form-label">Postal Code *</label>
        <input
          type="text"
          class="form-control"
          placeholder="Postal Code*"
          id="postal"
          name="postal"
          v-model="postal"
          required
        />
      </div>
      <div class="group">
        <label for="city" class="form-label">City *</label>
        <input
          type="text"
          class="form-control"
          placeholder="City*"
          id="city"
          name="city"
          v-model="city"
          required
        />
      </div>
      <div class="group">
        <label for="fileCV" class="form-label">Attach CV *</label>
        <input class="form-control" name="fileCV" type="file" id="fileCV" required/>
      </div>
      <input type="submit" value="Send"/>
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
      axios
        .get(process.env.VUE_APP_API + "jobs/" + this.$route.params.id)
        .then((response) => {
          var data = response.data[0];
          this.job.id = data.j_id;
          this.job.name = data.j_name;
        });
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