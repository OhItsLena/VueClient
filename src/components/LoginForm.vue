<template>
  <section>
    <form @submit.prevent="validateBeforeSubmit">
      <b-field :type="{'is-danger': errors.has('username')}" :message="errors.first('username')">
        <b-input
          type="text"
          placeholder="username"
          v-model="username"
          name="username"
          v-validate="'required'"
        ></b-input>
      </b-field>
      <b-field :type="{'is-danger': errors.has('password')}" :message="errors.first('password')">
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
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </section>
</template>

<script>
import ApiService from "../ApiService";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      oid: "",
      error: "",
      isLoading: false
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
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
        this.isLoading = true;
        const user = await ApiService.authentication(
          this.username,
          this.password
        );
        this.$store.commit("login", {
          id: user.id,
          name: user.username,
          pwd: user.password
        });
        this.oid = await ApiService.insertOrder();
        this.$toast.open({
          message: "Successfully logged in!",
          type: "is-success",
          position: "is-bottom"
        });
        this.isLoading = false;
        this.$router.push({ path: `/products/${this.oid}` });
        this.$notification.open("Hello " + this.username + "!");
      } catch (err) {
        this.username = "";
        this.password = "";
        this.isLoading = false;
        this.valid = false;
        this.error = err.message;
        this.$notification.open({
          type: "is-danger",
          message: "Ups! Something went wrong :("
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
