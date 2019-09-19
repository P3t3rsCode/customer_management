<template>
  <div class="card-body">
    <div class="con">
      <h4>Create A Customer</h4>
      <form @submit.prevent="addCustomer">
        <div class="form-group-row">
          <label for="name">Name</label>
          <input type="text" name="name" v-model="form.name" class="form-control" />
        </div>
        <div class="form-group-row">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="form.email" class="form-control" />
        </div>
        <div class="form-group-row">
          <label for="phone">Phone</label>
          <input type="number" name="phone" v-model="form.phone" class="form-control" />
        </div>
        <div class="form-group-row">
          <label for="webiste">Website</label>
          <input type="text" name="website" v-model="form.website" class="form-control" />
        </div>
        <div class="form-group-row">
          <button type="submit" class="form-control btn">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    addCustomer() {
      axios
        .post("/api/customers", this.form, {
          headers: {
            Authorization: `Bearer ${this.$store.state.current_user.token}`
          }
        })
        .then(res => this.$router.push("/customers"))
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped>
.card-body {
  display: flex;
  justify-content: center;
}
.con {
  width: 50%;
}
.form-group-row {
  margin-bottom: 1em;
}
.btn {
  background: #50c2c7;
  color: white;
  margin-top: 2em;
  transition: 0.5s ease-in-out;
  &:hover {
    background: #47979a;
  }
}
</style>