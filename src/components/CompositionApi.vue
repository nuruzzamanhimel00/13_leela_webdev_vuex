<template>
  <div class="text-center">
    <h1>My name is: {{ userName }}</h1>
    <h1>Usser Details</h1>
    <p>Name: {{ userDetails.name }}</p>
    <p>Name: {{ userDetails.age }}</p>
  </div>
</template>

<script>
import { reactive, ref, isRef, isReactive } from "vue";

export default {
  setup() {
    let userName = ref("My name is Himel");

    let userDetails = reactive({
      name: " Himel",
      age: 29,
    });

    console.log(isRef(userName));
    console.log(isReactive(userDetails));

    setTimeout(() => {
      console.log("set timeout is called");
      //   console.log(userName, userDetails);
      userName.value = "My name is Leela";

      userDetails.name = "Update Himel";
      userDetails.age = "Update 20";
    }, 2000);

    return {
      userName: userName,
      userDetails: userDetails,
    };
  },
};
</script>

<style lang="scss" scoped></style>
