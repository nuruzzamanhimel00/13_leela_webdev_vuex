<template>
  <div>
    <counter-component></counter-component>
    <todo-list></todo-list>
    <p class="text-center">Done Tod list: {{ doneToDoLists }}</p>
  </div>
</template>

<script>
import CounterComponent from "./components/CounterComponent.vue";
import TodoList from "./components/TodoList.vue";
export default {
  name: "App",
  components: { CounterComponent, TodoList },
  computed: {
    doneToDoLists() {
      return this.$store.getters.doneTodos;
    },
  },
};
</script>

<style></style>
