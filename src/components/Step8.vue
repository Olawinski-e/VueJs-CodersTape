<template>
  <div class="container">
    <h3 v-text="title"></h3>

    <nav>
      <a><router-link to="/">Step1</router-link></a>
      <a><router-link to="/step2">Step2</router-link></a>
      <a><router-link to="/step3">Step3</router-link></a>
      <a><router-link to="/step5">Step5</router-link></a>
      <a><router-link to="/step6">Step6</router-link></a>
      <a><router-link to="/step7">Step7</router-link></a>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Step8",
  data() {
    return { title: "step 8" };
  },
};
</script>

<style scoped>
a {
  margin: 0 6px;
}
</style>
