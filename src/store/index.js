import { createStore } from "vuex";

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false,
  },
  getters: {},
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('cart')) {
        state.JSON.parse(localStorage.getItem('cart'))
      } else {
        state.JSON.parse(localStorage.setItem('cart'))
      }
    },
    addToCart(state,item){
      const exists = state.cart.items.filter(i => i.product.id == item.product.id)
    },
    setLoading(state,status){
      state.isLoading = status
    }
  },
  actions: {},
  modules: {},
});
