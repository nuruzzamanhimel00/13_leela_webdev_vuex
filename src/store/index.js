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
    todo: (state) => (id) => {
      console.log("id", id);
      if (id != "") {
        return state.toDoList.find((toDo) => toDo.id === id);
      }
    },
    todoLists(state) {
      return state.toDoList;
    },
    doneTodosCount(state, getters) {
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
});

export default store;
