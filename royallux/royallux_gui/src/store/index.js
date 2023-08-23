import { createStore } from 'vuex'
import axios from 'axios'

const dataUrl = "https://royallux.onrender.com/"

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
    postResponse: null,
    postStatus: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setUser(state, user) {
      state.user = user
    },
    setProducts(state, products) {
      state.products = products
    },
    setProduct(state, product) {
      state.product = product
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    setToken(state, token) {
      state.token = token
    },
    setMsg(state, msg) {
      state.msg = msg
    },
    setPostStatus(state, status) {
      state.postStatus = status
    },
    setPostResponse(state, response) {
      state.postResponse = response
    },
  },
  actions: {
    async fetchUsers(context) {
      try {
        const {data} = await axios.get(`${dataUrl}users`)
        context.commit("setUsers", data.results)
      } catch(e) {
        context.commit("setMsg", "An error has occured")
      }
    },
    async fetchProducts(context) {
      try {
        const {data} = await axios.get(`${dataUrl}products`)
        context.commit("setProducts", data.results)
      } catch(e) {
        context.commit("setMsg", "An error has occured")
      }
    },
    async submitProduct({commit}, context, postProduct) {
      try {
        const response = await axios.post(`${dataUrl}product`, postProduct)
        commit('setPostResponse', response.data)
          console.log(response.data);
      } catch(e) {
        commit("setPostStatus", "An error has occured")
      }
  },
},

  modules: { }
});      
