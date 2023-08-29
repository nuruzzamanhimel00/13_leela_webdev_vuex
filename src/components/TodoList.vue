<template>
  <div class="text-center">
    <h1>ToList (Done: {{ doneToDoListsCount }})</h1>
    <ul>
      <li v-for="list in todoLists" :key="list.id">
        <a href="" @click.prevent="selectedList(list.id)">
          {{ list.text }} ( {{ list.done ? "Done" : "Not Done" }} )
        </a>
      </li>
    </ul>
    <p v-if="selectTodoId != ''">selected TODO: {{ selectedData.text }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoList",
  data() {
    return {
      selectTodoId: "",
      selectedData: "",
    };
  },
  watch: {
    // selectTodoId() {
    //   this.selectedTodo(this.selectTodoId);
    //   console.log("selectTodoId", this.selectTodoId);
    // },
  },
  computed: {
    // todoLists() {
    //   return this.$store.getters.todoLists;
    // },
    ...mapGetters("todolist", {
      doneToDoListsCount: "doneTodosCount",
      todoLists: "todoLists",
      selectedTodo: "todo",
    }),
    // doneToDoListsCount() {
    //   return this.$store.getters.doneTodosCount;
    // },
    // selectedTodo() {
    //   return this.$store.getters.todo(this.selectTodoId);
    // },
  },
  methods: {
    selectedList(listId) {
      this.selectTodoId = listId;
      this.selectedData = this.selectedTodo(listId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
