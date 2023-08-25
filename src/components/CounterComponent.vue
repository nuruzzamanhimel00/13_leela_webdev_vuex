<template>
  <div class="my-3 text-center">
    Counter: {{ count }}
    <br />

    <button @click="incrementHandler">Increment</button>
    <button @click="decrementHandler">Decrement</button>
    <br />
    <button @click="incrementData">INCREMENT H!</button>
  </div>
</template>

<script>
export default {
  name: "CounterComponent",
  date() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    doneToDoListsCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
  methods: {
    incrementHandler() {
      this.$store.dispatch("increment", 1);
    },
    decrementHandler() {
      this.$store.dispatch("decrement", 1);
    },
    incrementData() {
      this.$store.dispatch("actionB", 1).then((response) => {
        console.log("success");
        console.log(response);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
