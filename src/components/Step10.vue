<template>
  <div class="container">
    <h3 v-text="title"></h3>

    <Telephone template="(XX) XX-XX-XX-XX-XX" />
  </div>
</template>

<script>
import Telephone from "@/components/Telephone";
export default {
  name: "Step10",
  components: { Telephone },
  data() {
    return { title: "step 10" };
  },
};
</script>

<style scoped></style>
