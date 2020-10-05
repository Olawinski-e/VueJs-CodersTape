<template>
  <div>
    <select
      name="dropdown"
      id="dropdown"
      v-model="selectedOption"
      @change="optionChanged"
    >
      <option value="null" disabled>Please select an option</option>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
      <option value="Option 4">Option 4</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    optionChanged() {
      this.$emit("update:option", this.selectedOption);
    },
  },
};
</script>

<style scoped></style>
