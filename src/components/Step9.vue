<template>
  <div class="container">
    <h3 title="title">{{ title }}</h3>

    <input
      type="text"
      v-model="state"
      class="form-control mt-2 "
      autocomplete="off"
      @focus="modal = true"
    />

    <div v-if="filteredStates && modal">
      <ul class="">
        <li
          v-for="(filteredStates, index) in filteredStates"
          :key="index"
          @click="setState(filteredStates)"
        >
          {{ filteredStates }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Step9",
  data() {
    return {
      title: "step 9",
      state: "",
      modal: false,
      states: ["Florida", "Alabama", "Nevada", "California", "Alaska"],
      filteredStates: [],
    };
  },
  mounted() {
    this.filterStates();
  },
  methods: {
    filterStates() {
      if (this.state.length == 0) {
        this.filteredStates = this.states;
      }

      this.filteredStates = this.states.filter((state) => {
        return state.toLowerCase().startsWith(this.state.toLowerCase());
      });
    },
    setState(state) {
      this.state = state;
      this.modal = false;
    },
  },
  watch: {
    state() {
      this.filterStates();
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;
}
li {
  display: flex;
  align-items: center;
  padding-left: 10px;
  border: solid 1px white;
  background-color: teal;
  color: white;
  height: 48px;
  &:hover {
    background-color: rgb(10, 162, 162);
  }
}
</style>
