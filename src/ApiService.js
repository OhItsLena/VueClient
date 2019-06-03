import axios from "axios";
import store from "./store";

const url = "http://localhost:8081/api/";

class ApiService {
  //Get Products
  static getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "products", {
          auth: {
            username: store.state.username,
            password: store.state.password
          }
        });
        const data = res.data.data;
        resolve(
          data.map(product => ({
            id: product._id,
            food_drink: product.name,
            price: product.price
          }))
        );
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  static getProduct(pid) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "products/" + pid, {
          auth: {
            username: store.state.username,
            password: store.state.password
          }
        });
        const data = res.data.data;
        resolve({
          id: data._id,
          food_drink: data.name,
          price: data.price,
          quant: 0
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static getOrderProducts(oid) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "orders/" + oid, {
          auth: {
            username: store.state.username,
            password: store.state.password
          }
        });
        const data = res.data.data;
        resolve(data.products);
      } catch (err) {
        reject(err);
      }
    });
  }

  //Create Order
  static insertOrder() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          url + "orders",
          {
            guest: store.state.uid
          },
          {
            auth: {
              username: store.state.username,
              password: store.state.password
            }
          }
        );
        const order = res.data.data;
        resolve(order._id);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  static updateOrder(products, oid) {
    return axios.put(
      url + "orders/" + oid,
      {
        products: products
      },
      {
        auth: {
          username: store.state.username,
          password: store.state.password
        }
      }
    );
  }

  //Delete Order
  static deleteOrder(id) {
    return axios.delete(url + "orders/" + id, {
      auth: {
        username: store.state.username,
        password: store.state.password
      }
    });
  }

  //Authentication
  static authentication(username, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "auth", {
          auth: {
            username: username,
            password: password
          }
        });
        const data = res.data.data;
        resolve({
          id: data._id,
          username: data.name,
          password: data.password
        });
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }
}

export default ApiService;
