<template>
    <section class="section">
         <h2 class="level-item subtitle is-4">Your order:</h2>
        <b-table :data="data" :mobile-cards="false">
            <template slot-scope="props">
                <b-table-column field="food_drink" label="Food/Drink">
                    {{ props.row.food_drink }}
                </b-table-column>
                <b-table-column field="price" label="Price">
                    $ {{ props.row.price }}
                </b-table-column>
            </template>
        </b-table> 
        <hr/>
         <div class="level is-mobile">
            <div class="level-left">
                <p class="is-size-4">Total:</p>
            </div>
            <div class="level-right">
                <p class="is-size-4" > $ {{ data.length }}</p>
            </div>
        </div>
        <b-button class="is-rounded is-primary is-large is-fullwidth" @click="complete()" style="margin-top: 10%">Complete Order</b-button>
        <b-button class="is-rounded is-light is-large is-fullwidth" @click="cancle()" style="margin-top: 10px">Cancle Order</b-button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                data: [
                    { 'food_drink': 'Pizza', 'price': 5.5, },
                    { 'food_drink': 'Burger', 'price': 7.5 },
                    { 'food_drink': 'Pommes', 'price': 3.5 },
                    { 'food_drink': 'Cola', 'price': 2 },
                ],
            }
        },
        methods: {
            complete() {
                this.$notification.open('Order completed! :)')
                this.$router.push('/login')
            },
            cancle() {
                this.$notification.open('Order canceld! :(')
                this.$router.push('/login')
            }
        }
    }
</script>