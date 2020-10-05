<template>
  <div class="container">
    <h3 title="title">{{ title }}</h3>

    <input type="number" v-model="price" />
    <div>Taxe {{ taxFormatted }}</div>
    <div>Total {{ totalFormatted }}</div>
  </div>
</template>

<script>
export default {
  name: "Step3",
  data() {
    return {
      title: "step 3",
      price: 100,
    };
  },
  computed: {
    tax() {
      return this.price * 0.1;
    },
    taxFormatted() {
      return "$" + this.tax;
    },
    total() {
      return parseInt(this.price) + this.tax;
    },
    totalFormatted() {
      return "$" + this.total;
    },
  },
};
</script>

<style scoped></style>
