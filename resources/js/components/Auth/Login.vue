<template>
  <div class="lg_con">
    <div class="login row justify-content center">
      <div class="col-md-12">
        <div class="card">
          <h3 class="card-head">Login</h3>
          <div class="card-body">
            <form @submit.prevent="authenticate">
              <div class="form-group-row">
                <label for="email">Email</label>
                <input type="email" name="email" v-model="form.email" class="form-control" />
              </div>
              <div class="form-group-row">
                <label for="email">Password</label>
                <input type="password" name="password" v-model="form.password" class="form-control" />
              </div>
              <div class="form-group-row">
                <button type="submit" class="form-control btn">Login</button>
              </div>
              <div v-if="authError" class="form-group-row">
                <p class="error">{{authError}}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "../../helpers/Auth";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    authenticate() {
      this.$store.dispatch("login");
      login(this.$data.form)
        .then(res => {
          this.$store.commit("login_success", res);
          this.$router.push({ path: "/" });
        })
        .catch(error => {
          this.$store.commit("login_failed", { error });
        });
    }
  },
  computed: {
    authError() {
      return this.$store.getters.auth_error;
    }
  }
};
</script>
<style lang="scss" scoped>
.lg_con {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}

.row {
  width: 100%;
}
.card-head {
  text-align: center;
  padding-top: 2em;
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

.error {
  text-align: center;
  color: #e25050;
}
</style>