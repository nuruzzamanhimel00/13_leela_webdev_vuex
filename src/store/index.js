import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    count: 100,
  },
  getters: {},
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
    decrement(state, payload) {
      state.count -= payload;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit("increment", payload);
    },
    decrement(context, payload) {
      context.commit("decrement", payload);
    },
  },
});

export default store;
