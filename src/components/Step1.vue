<template>
  <div class="container">
    <h1 v-bind:title="menu">{{ title }}</h1>

    <p v-text="content"></p>

    <ul>
      <li v-for="(todo, index) in items" :key="index">- {{ todo }}</li>
    </ul>

    <div class="input-group mb-3">
      <input class="form-control" type="text" v-model="item" />
    </div>
    <button @click="items.push(item)" class="btn btn-primary">
      Add a todo
    </button>
  </div>
</template>

<script>
export default {
  name: "StepFirst",
  data() {
    return {
      title: "Hello you!",
      content: "Add something to do",
      menu: 'I said "Hello you!"',
      item: "",
      items: ["Redo my portfolio", "Do the website of MKH", "Change my life"],
    };
  },
};
</script>

<style>
li {
  display: flex;
  justify-content: flex-start;
}
</style>
