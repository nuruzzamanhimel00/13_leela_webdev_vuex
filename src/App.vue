<template>
  <div>
    <counter-component></counter-component>
  </div>
</template>

<script>
import CounterComponent from "./components/CounterComponent.vue";
export default {
  name: "App",
  components: { CounterComponent },
};
</script>

<style></style>
