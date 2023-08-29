const todolist = {
  namespaced: true,
  state: {
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
  mutations: {},
  actions: {},
};

export default todolist;
