<template>
  <div class="text-center">
    <h1>----------------Composition Api -----------------------</h1>
    <h1>My name is: {{ userName }}</h1>
    <h1>Usser Details</h1>
    <p>Name: {{ userDetails.name }}</p>
    <p>Name: {{ userDetails.age }}</p>
    <button @click="changeUsername">Change Name</button>
    <hr />
    <h1>Computed property</h1>
    <h3>FUll name is: {{ fullName }}</h3>
    <h4>Age:{{ age }}</h4>
    <button @click.prevent="changeAgeHandler">Change Age</button>
    <div>
      <input type="text" placeholder="first name" v-model="firstName" />
      <input type="text" placeholder="last name" v-model="lastName" />
    </div>
  </div>
</template>

<script>
import { reactive, ref, isRef, isReactive, computed, watch } from "vue";

export default {
  setup() {
    let userName = ref("My name is Himel");

    let userDetails = reactive({
      name: " Himel",
      age: 29,
    });
    let firstName = ref("");
    let lastName = ref("");
    let age = ref(30);
    // ###################### Watch ###################################
    watch([age, firstName], (oldValue, newValue) => {
      console.log(oldValue, newValue);
    });
    watch(
      userDetails,
      (value) => {
        console.log("watch", value);
      },
      {
        deep: true,
      }
    );
    // ###################### Watch ###################################
    const fullName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    function changeAgeHandler() {
      age.value = age.value + 1;
    }

    console.log(isRef(userName));
    console.log(isReactive(userDetails));

    setTimeout(() => {
      console.log("set timeout is called");
      //   console.log(userName, userDetails);
      userName.value = "My name is Leela";

      userDetails.name = "Update Himel";
      userDetails.age = "Update 20";
    }, 2000);

    function changeUsername() {
      userDetails.name = "lorem ipsum";
    }

    return {
      userName: userName,
      userDetails: userDetails,
      changeUsername: changeUsername,
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      age: age,
      changeAgeHandler: changeAgeHandler,
    };
  },
};
</script>

<style lang="scss" scoped></style>
