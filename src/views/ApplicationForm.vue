<template>
  <div class="container" id="root">
    <h1 class="mb-4">Application For Job {{ $route.params.id }}</h1>
    <form
      action="mailto:rafi.kahn@shark-soft.com"
      method="POST"
      enctype="multipart/form-data"
      name="EmailForm"
      class="row g-3"
    >
      <div class="row mb-3">
        <div class="col">
          <label for="inputFirstName" class="form-label">First Name *</label>
          <input
            type="text"
            class="form-control"
            placeholder="Max"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <label for="inputLastName" class="form-label">Last Name *</label>
          <input
            type="text"
            class="form-control"
            placeholder="Mustermann"
            aria-label="Last name"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-8">
          <label for="inputEmail" class="form-label">Email *</label>
          <input
            type="text"
            class="form-control"
            placeholder="example@example.com"
          />
        </div>
        <div class="col-sm-4">
          <label for="inputTelNumber" class="form-label">Phone *</label>
          <input type="text" class="form-control" placeholder="+43 ..." />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <label for="inputAddress" class="form-label">Address *</label>
          <input type="text" class="form-control" placeholder="Street..." />
        </div>
        <div class="col-sm-3">
          <label for="inputPostal" class="form-label">Postal Code *</label>
          <input type="text" class="form-control" placeholder="Postal Code*" />
        </div>
        <div class="col-sm-3">
          <label for="inputCity" class="form-label">City *</label>
          <input type="text" class="form-control" placeholder="City*" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style scoped>
#root {
  margin-top: 2vh;
  margin-bottom: 2vh;
}
</style>