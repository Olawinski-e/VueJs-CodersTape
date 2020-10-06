<template>
  <div class="container">
    <h3 v-text="title"></h3>

    <ol>
      <li v-for="(post, index) in posts.slice(0, 10)" :key="index">
        - {{ post.title }}
      </li>
    </ol>
  </div>
</template>

<script>
window.axios = require("axios");

export default {
  name: "Step6",
  data() {
    return { title: "step 6", posts: [] };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => (this.posts = json))
      .catch(
        (error) =>
          console.log(error) +
          (this.posts = [{ title: "Sorry, no post found" }])
      )
      .finally(() => console.log("data loading complete."));
  },
};
</script>

<style scoped></style>
