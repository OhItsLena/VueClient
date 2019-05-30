import axios from "axios";

const url = "http://localhost:8081/api/";

class ApiService{
    //Get Products
    static getProducts(){
        return new Promise(async (resolve, reject)=>{
            try{
                const res = await axios.get(url+'products');
                const data = res.data.data;
                resolve(
                    data.map(product => ({
                        id: product._id,
                        food_drink: product.name,
                        price: product.price
                    }))
                );
            } catch(err){
                reject(err);
            }
        });
    }

    static getProduct(pid){
        return new Promise(async (resolve, reject)=>{
            try{
                const res = await axios.get(url+'products/'+pid);
                const data = res.data.data;
                resolve(
                   {
                       id: data._id,
                       food_drink: data.name,
                       price: data.price,
                       quant: 0
                   }
                );
            } catch(err){
                reject(err);
            }
        });
    }

    static getOrderProducts(oid){
        return new Promise(async (resolve, reject)=>{
            try{
                const res = await axios.get(url+'orders/'+oid);
                const data = res.data.data;
                resolve(data.products);
            } catch(err){
                reject(err);
            }
        });
    }
    //Create Order
    static newOrder(name){
        return axios.post(url+'orders', {
            guest: name,
            products: []
        });
    }

    static insertOrder(name){
        return new Promise(async (resolve, reject)=>{
            try{
                const res = await axios.post(url+'orders', {
                    guest: name,
                });
                const order = res.data.data;
                resolve(order._id);
            } catch(err){
                reject(err);
            }
        });
    }

    static updateOrder(products, oid){
        return axios.put(url+'orders/'+oid, {
            products: products
        });
    }


    //Delete Order
    static deleteOrder(id){
        return axios.delete(url+'orders/'+id);
    }
}

export default ApiService;