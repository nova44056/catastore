import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import route from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    data: [],
    products: [],
  },
  mutations: {
    SET_DATA(state, data){
      state.data = data
    },
    SET_PRODUCTS(state, products){
      state.products = products
    },
    RETRIEVE_TOKEN(state, token) {
      state.token = token
    },
    DESTROY_TOKEN(state) {
      state.token = null
    }
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
  actions: {
    destroyToken (store) {
        if (store.getters.loggedIn) {
          localStorage.removeItem('access_token')
          store.commit('DESTROY_TOKEN')
        }

    }, 
    async retrieveToken({ commit }, credentials){
      try{
        const resp = await axios.post('https://catastore.com/api/sessions', {
          data: {
            auth: credentials.email,
            password: credentials.password
          }
        })
        const token = resp.data.access_token
        localStorage.setItem('access_token', token)
        commit('RETRIEVE_TOKEN', token)
        route.push('/')
      }catch (e) {
        console.log(e)
      }

    },
    async loadAllStore ({ commit }) {
      try{
        const resp = await axios.get('https://catastore.com/api/stores_home')
        let data = resp.data
        commit('SET_DATA', data)

      }catch (e) {
        console.log(e)
      }
    },
    async loadStoreItems ({ commit }, storeName) {
      try {
        const storeProductsAPI = 'https://catastore.com/api/stores/' + storeName + '/products'
        const resp = await axios.get(storeProductsAPI)
        let products = resp.data
        commit('SET_PRODUCTS', products)
      }catch (e) {
        console.log(e)
      }
     }
  },
  modules: {
  }
})
