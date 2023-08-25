import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    count: 100,
    toDoList: [
      { id: 1, text: "Learn Vue", done: false },
      { id: 2, text: "Learn Vue 1", done: true },
      { id: 3, text: "Learn Vue 3", done: true },
      { id: 4, text: "Learn Vue 4", done: true },
      { id: 5, text: "Learn Vue 4", done: false },
    ],
  },
  getters: {
    todoLists(state) {
      return state.toDoList;
    },
    doneTodos(state, getters) {
      return getters.todoLists.filter((todo) => todo.done).length;
    },
  },
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
