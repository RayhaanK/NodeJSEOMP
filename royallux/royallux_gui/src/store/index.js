import { createStore } from "vuex";
import axios from "axios";

const dataUrl = "https://royallux.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    addProduct(state, product) {
      state.product = product;
    },
    dltProduct(state, product) {
      state.product = product;
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${dataUrl}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${dataUrl}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async submitProduct(context, payload) {
      try {
        const response = await axios.post(`${dataUrl}product`, payload);
        if (response) {
          context.commit("addProduct", response.data);
          location.reload()
          console.log(response.data);
        } else {
          context.commit("setMsg", "An error has occured");
        }
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    // async deleteProduct(context, prodID) {
    //   try {
    //     const response = (await axios.delete(`${dataUrl}product/${prodID}`));
    //     if (response) {
    //       context.commit("dltProduct", response.data);
    //       location.reload()
    //       console.log(response.data);
    //     } else {
    //       context.commit("setMsg", "An error has occured");
    //     }
    //   } catch (e) {
    //     context.commit("setMsg", "An error has occured");
    //   }
    // },
  },

  modules: {},
});
