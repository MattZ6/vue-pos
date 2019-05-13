import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    qtd: 0
  },
  mutations: {
    ADD_ITEM: async (state, payload) => {
      state.cart.push(payload);
      state.qtd++;
    },
    REMOVE_ITEM(state, payload) {
      state = state.cart.filter(id => id !== payload);
      state.qtd--;
    }
  }
});
