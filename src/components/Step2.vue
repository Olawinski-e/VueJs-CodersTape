<template>
  <div class="container">
    <h3 v-if="!hidden" title="title">{{ title }}</h3>
    <p v-else>step 999999</p>

    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.text }} -
        <div v-if="item.checked">Checked!</div>

        <button @click="item.checked = !item.checked" class="btn btn-primary">
          toggle
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Step2",
  data() {
    return {
      title: "step 2",
      hidden: false,
      items: [
        {
          text: "item1",
          checked: true,
        },
        {
          text: "item2",
          checked: true,
        },
        {
          text: "item3",
          checked: false,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
