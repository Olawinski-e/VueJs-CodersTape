<template>
  <div class="container">
    <h3 v-text="title"></h3>
    <div :class="classObject">{{ value }}</div>
    <div :style="{ fontSize: value * 4 + 'px' }">{{ value }}</div>

    <button class="btn btn-primary" @click="value++">+</button>

    <button class="btn btn-warning" @click="value--">
      -
    </button>
  </div>
</template>

<script>
window.axios = require("axios");

export default {
  name: "Step7",
  data() {
    return { title: "step 7", value: 1, error: false, warning: false };
  },
  computed: {
    classObject() {
      return {
        "red-error": this.value > 5,
        "yellow-warning": this.value >= 3,
        "green-ok": this.value < 3,
      };
    },
  },
};
</script>

<style scoped>
.green-ok {
  background-color: yellowgreen;
}
.yellow-warning {
  background-color: yellow;
  color: black;
}
.red-error {
  background-color: tomato;
  color: white;
}

button {
  margin: 8px 4px;
}
</style>
