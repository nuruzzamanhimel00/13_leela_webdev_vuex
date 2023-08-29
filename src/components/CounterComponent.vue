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
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "CounterComponent",
  date() {
    return {};
  },
  computed: {
    ...mapState("count", {
      count: (state) => state.count,
    }),
    // count() {
    //   return this.$store.state.count;
    // },
    ...mapGetters("count", {
      doneToDoListsCount: "doneTodosCount",
    }),
    // doneToDoListsCount() {
    //   return this.$store.getters.doneTodosCount;
    // },
  },
  methods: {
    ...mapActions("count", {
      increment: "increment",
      decrement: "decrement",
      actionB: "actionB",
    }),
    incrementHandler() {
      this.increment(1);
      // this.$store.dispatch("increment", 1);
    },
    decrementHandler() {
      this.decrement(1);
      // this.$store.dispatch("decrement", 1);
    },
    incrementData() {
      this.actionB(1).then((response) => {
        console.log("success");
        console.log(response);
      });
      // this.$store.dispatch("actionB", 1).then((response) => {
      //   console.log("success");
      //   console.log(response);
      // });
    },
  },
};
</script>

<style lang="scss" scoped></style>
