<template>
  <div class="container">
    <h3 title="title">{{ title }}</h3>

    <input type="number" v-model="price" />
    <div>Taxe {{ moneyFormat(tax) }}</div>
    <div>Total {{ moneyFormat(total) }}</div>
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
  methods: {
    moneyFormat(price) {
      return "$" + price + ".00";
    },
  },
  computed: {
    tax() {
      return this.price * 0.1;
    },
    total() {
      return parseInt(this.price) + this.tax;
    },
  },
};
</script>

<style scoped></style>
