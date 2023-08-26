<template>
  <div class="text-center">
    <h1>ToList (Done: {{ doneToDoListsCount }})</h1>
    <ul>
      <li v-for="list in todoLists" :key="list.id">
        <a href="" @click.prevent="selectTodoId = list.id">
          {{ list.text }} ({{ list.done ? "Done" : "Not Done" }})
        </a>
      </li>
    </ul>
    <p v-if="selectedTodo">selected TODO: {{ selectedTodo.text }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodoList",
  data() {
    return {
      selectTodoId: "",
    };
  },
  computed: {
    // todoLists() {
    //   return this.$store.getters.todoLists;
    // },
    ...mapGetters({
      doneToDoListsCount: "doneToDoListsCount",
      todoLists: "todoLists",
    }),
    // doneToDoListsCount() {
    //   return this.$store.getters.doneTodosCount;
    // },
    selectedTodo() {
      return this.$store.getters.todo(this.selectTodoId);
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
