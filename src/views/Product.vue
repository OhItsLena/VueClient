<template>
    <section class="section">
        <div class="level-right">
            <p class="level-item" ><strong>Cart: {{ cart }}</strong></p>
        </div>
        <b-table :data="data" :mobile-cards="false">
            <template slot-scope="props">
                <b-table-column field="food_drink" label="Food/Drink">
                    {{ props.row.food_drink }}
                </b-table-column>
                <b-table-column field="price" label="Price">
                    $ {{ props.row.price }}
                </b-table-column>
                <b-table-column field="add" label="Add" class="has-text-right">
                    <button class="button is-small is-light" @click="Add(props.row)">Add</button>
                </b-table-column>
            </template>
        </b-table> 
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
                cart: 0
            }
        },
        methods: {
             Add(product) {
                this.$notification.open('Added ' + product.food_drink + ' to cart!');
                this.cart++;
            }
        }
    }
</script>