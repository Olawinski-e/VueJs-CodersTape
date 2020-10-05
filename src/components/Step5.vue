<template>
  <div class="container">
    <h3 title="title">{{ title }}</h3>

    <p v-text="dropdownResult"></p>

    <Dropdown @update:option="optionUpdate" />
  </div>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "Step5",
  components: { Dropdown },
  data() {
    return { title: "Step 5", dropdownResult: "" };
  },
  methods: {
    optionUpdate(value) {
      this.dropdownResult = value;
    },
  },
};
</script>

<style scoped></style>
