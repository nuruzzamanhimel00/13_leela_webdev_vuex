<template>
  <div class="text-center">
    <h1>ToList (Done: {{ doneToDoLists }})</h1>
    <ul>
      <li v-for="list in todoLists" :key="list.id">
        {{ list.text }} ({{ list.done ? "Done" : "Not Done" }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {};
  },
  computed: {
    todoLists() {
      return this.$store.getters.todoLists;
    },
    doneToDoLists() {
      return this.$store.getters.doneTodos;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
