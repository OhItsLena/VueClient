import axios from "axios";

const url = "http://localhost:8081/api/products/";

class ApiService{
    //Get Posts
    static getProduct(){
        return new Promise(async (resolve, reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data.data;
                resolve(
                    data.map(product => ({
                        food_drink: product.name,
                        price: product.price
                    }))
                );
            } catch(err){
                reject(err);
            }
        });
    }
}

export default ApiService;