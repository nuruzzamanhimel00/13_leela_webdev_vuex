const count = {
  namespaced: true,
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
    actionA(context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("increment", payload);

          resolve("Increment daone!!");
        }, 1000);
      });
    },
    actionB(context, payload) {
      return context.dispatch("actionA", payload).then((res) => {
        return res;
      });
    },
  },
};

export default count;
