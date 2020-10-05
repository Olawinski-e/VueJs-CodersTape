<template>
  <div class="container">
    <p>
      <strong
        ><i>{{ person.title }}</i></strong
      >
    </p>
    <p @click="toggle = !toggle" class="btn btn-primary">personal details</p>
    <div v-if="toggle === true" class="mb-3">
      <strong>First name:</strong> {{ person.description.Firstname }} --
      <strong>Last name:</strong>
      {{ person.description.Lastname }}
      <br />
      <strong>Username:</strong> {{ person.description.Username }}
      <br />
      <strong>Email:</strong> {{ person.description.Email }}
      <br />
      <strong>Date of birth:</strong> {{ person.description.Dateofbirth }} --
      <strong>Age:</strong>
      {{ person.description.Age }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Step4",
  props: ["person"],
  data() {
    return {
      toggle: false,
    };
  },
};
</script>

<style scoped></style>
