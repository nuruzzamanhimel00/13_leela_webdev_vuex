import { createStore } from "vuex";

import count from "./modules/count";
import todolist from "./modules/todolist";

// Create a new store instance.
const store = createStore({
  modules: {
    count: count,
    todolist: todolist,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
