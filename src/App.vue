<template>
  <div>
    <counter-component></counter-component>
    <todo-list></todo-list>
    <p class="text-center">Done Tod list: {{ doneToDoListsCount }}</p>
  </div>
</template>

<script>
import CounterComponent from "./components/CounterComponent.vue";
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: { CounterComponent, TodoList },
  computed: {
    doneToDoListsCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
};
</script>

<style></style>
