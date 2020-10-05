<template>
  <div id="app" class="container">
    <Step1 />
    <hr />
    <Step2 />
    <hr />
    <Step3 />
    <hr />
    <h3 title="step 4">{{ title4 }}</h3>
    <Step4 v-for="person in persons" :key="person.id" :person="person" />
  </div>
</template>

<script>
import Step1 from "./components/Step1.vue";
import Step2 from "./components/Step2.vue";
import Step3 from "./components/Step3.vue";
import Step4 from "./components/Step4.vue";

export default {
  name: "App",
  components: { Step1, Step2, Step3, Step4 },
  data() {
    return {
      title4: "step 4",
      persons: [
        {
          id: 1,
          title: "Alejandra Sanchez",
          description: {
            Firstname: "Alejandra",
            Lastname: "Sanchez",
            Email: "alejandrasanchez@ono.es",
            Username: "alejandras",
            Password: "mOrUzuih",
            Dateofbirth: "1983-04-08",
            Age: 37,
            Sex: "female",
          },
        },
        {
          id: 2,
          title: "Ekhardt H. Nehls",
          description: {
            Firstname: "Ekhardt",
            Lastname: "Nehls",
            Email: "ekhardtnehls@yahoo.com",
            Username: "ekhardtn",
            Password: "1OhabIYp",
            Dateofbirth: "1990-06-05",
            Age: 30,
            Sex: "male",
          },
        },
        {
          id: 3,
          title: "Sebastian L. Walton",
          description: {
            Firstname: "Sebastian",
            Lastname: "Walton",
            Email: "sebastianwalton@gmail.com",
            Username: "swalton",
            Password: "kgzAiXRf",
            Dateofbirth: "1961-04-09",
            Age: 59,
            Sex: "male",
          },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
