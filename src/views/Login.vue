<template>
  <section class="has-text-centered">
    <div class="section">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title">Welcome!</h1>
          <h2 class="subtitle is-4" style="margin-bottom: 20%">Start your order now</h2>

          <form @submit.prevent="validateBeforeSubmit">
            <b-field
              :type="{'is-danger': errors.has('username')}"
              :message="errors.first('username')"
            >
              <b-input
                type="text"
                placeholder="username"
                v-model="username"
                name="username"
                v-validate="'required'"
              ></b-input>
            </b-field>
            <b-field
              :type="{'is-danger': errors.has('password')}"
              :message="errors.first('password')"
            >
              <b-input
                type="password"
                placeholder="password"
                v-model="password"
                name="password"
                v-validate="'required'"
              ></b-input>
            </b-field>
            <button
              type="submit"
              class="button is-rounded is-primary is-large"
              style="margin-top: 15%"
            >Let's go!</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ApiService from "../ApiService";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      id: "",
      error: ""
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$toast.open({
            message: "Successfully logged in!",
            type: "is-success",
            position: "is-bottom"
          });
          this.createOrder();
          return;
        }
        this.$toast.open({
          message: "Input is not valid! Please check the fields.",
          type: "is-danger",
          position: "is-bottom"
        });
      });
    },
    async createOrder() {
      try {
        this.id = await ApiService.insertOrder(this.username, this.password);
        this.$store.commit("login", {
          name: this.username,
          pwd: this.password
        });
        //this.$notification.open('Hello ' + this.id + '!')
        this.$notification.open("Hello " + this.username + "!");
        this.$router.push({ path: `/products/${this.id}` });
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>