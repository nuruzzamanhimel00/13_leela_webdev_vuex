<template>
  <div>
    <counter-component></counter-component>
    <todo-list></todo-list>
    <p class="text-center">Done Tod list: {{ doneToDoListsCount }}</p>
    <CompositionApi />
  </div>
</template>

<script>
import CounterComponent from "./components/CounterComponent.vue";
import TodoList from "./components/TodoList.vue";
import CompositionApi from "./components/CompositionApi.vue";
export default {
  name: "App",
  components: { CounterComponent, TodoList, CompositionApi },
  computed: {
    doneToDoListsCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
};
</script>

<style></style>
