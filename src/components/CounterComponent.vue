<template>
  <div class="my-3 text-center">
    Counter: {{ count }}
    <br />

    <button @click="incrementHandler">Increment</button>
    <button @click="decrementHandler">Decrement</button>
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
  },
  methods: {
    incrementHandler() {
      this.$store.dispatch("increment", 1);
    },
    decrementHandler() {
      this.$store.dispatch("decrement", 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
