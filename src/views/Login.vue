<template>
  <section class="has-text-centered">
    <div class="section">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <h1 class="title">Welcome!</h1>
          <h2 class="subtitle is-4" style="margin-bottom: 20%">Please verify yourself:</h2>
          <loginform></loginform>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  name: "Login",
  components: {
    loginform: LoginForm
  }
};
</script>