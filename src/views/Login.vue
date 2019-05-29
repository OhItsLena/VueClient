<template>
    <section class="has-text-centered">
        <div class="section">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <h1 class="title">Welcome!</h1>
                    <h2 class="subtitle is-4" style="margin-bottom: 20%">Start your order now</h2>
                    <b-field label="Please register:"></b-field>
                    <b-input placeholder="firstname" v-model="firstname"></b-input>
                    <b-input placeholder="lastname" v-model="lastname" style="margin-top: 5%"></b-input>
                    <b-button class="is-rounded is-primary is-large" @click="register(firstname, lastname)" style="margin-top: 15%">Let's go!</b-button>
                </div>
            </div>
        </div>   
    </section>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                firstname: '',
                lastname: ''
            }
        },
        methods: {
            register(firstname, lastname) {
                this.$notification.open('Hello ' + firstname + ' ' + lastname + '!')
                this.$router.push('/products')
            }
        }
    }
</script>