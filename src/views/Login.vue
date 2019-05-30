<template>
    <section class="has-text-centered">
        <div class="section">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <h1 class="title">Welcome!</h1>
                    <h2 class="subtitle is-4" style="margin-bottom: 20%">Start your order now</h2>

                    <form @submit.prevent="validateBeforeSubmit">
                        <b-field :type="{'is-danger': errors.has('firstname')}" :message="errors.first('firstname')">
                            <b-input type="text" placeholder="firstname" v-model="firstname" name="firstname" v-validate="'required'"></b-input>
                        </b-field>
                        <b-field :type="{'is-danger': errors.has('lastname')}" :message="errors.first('lastname')">
                            <b-input type="text" placeholder="lastname" v-model="lastname" name="lastname" v-validate="'required'"></b-input>
                        </b-field>
                        <button type="submit" class="button is-rounded is-primary is-large" style="margin-top: 15%">Let's go!</button>
                    </form>
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
            register() {      
                this.$notification.open('Hello ' + this.firstname + ' ' + this.lastname + '!')
                this.$router.push('/products')
            },
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$toast.open({
                            message: 'Successfully registered!',
                            type: 'is-success',
                            position: 'is-bottom'
                        });
                        this.register();
                        return;
                    }
                    this.$toast.open({
                        message: 'Input is not valid! Please check the fields.',
                        type: 'is-danger',
                        position: 'is-bottom'
                    })
                });
            }
        }
    }
</script>