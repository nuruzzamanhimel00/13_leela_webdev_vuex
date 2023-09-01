<template>
  <div class="text-center">
    <h1>My name is: {{ userName }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let userName = ref("My name is Himel");

    setTimeout(() => {
      console.log("set timeout is called");
      console.log(userName);
      userName.value = "My name is Leela";
    }, 2000);

    return {
      userName: userName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
