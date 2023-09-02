<template>
  <div>
    <hr />
    <h1>---------------- PROPS ----------------</h1>
    <h3>FUll name is:</h3>
    <h4>name: {{ userData.name }}</h4>
    <h4>age: {{ userData.age }}</h4>
    <button @click="changeNameHandler">Change Name</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "UserDetailsComp",
  props: ["userDetails"],
  setup(props) {
    let userData = reactive(props.userDetails);

    function changeNameHandler() {
      userData.name = "lorem ipsum";
    }

    return {
      userData,
      changeNameHandler,
    };
  },
};
</script>

<style lang="scss" scoped></style>
