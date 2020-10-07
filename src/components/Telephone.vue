<template>
  <div>
    <div class="mt-2">
      <input
        type="text"
        placeholder="(XX) XX-XX-XX-XX-XX"
        class="form-control"
        v-model="number"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Step10",
  props: ["template"],
  data() {
    return { title: "step 10", number: "", format: "", regex: "^" };
  },
  mounted() {
    let x = 1;
    this.format = this.template.replace(/X+/g, () => "$" + x++);
    this.template.match(/X+/g).forEach((char) => {
      this.regex += "(\\d{" + char.length + "})?";
    });
  },
  watch: {
    number() {
      this.number = this.number
        .replace(/[^0-9]/g, "")
        .replace(new RegExp(this.regex, "g"), this.format)
        .substring(0, this.template.length);
    },
  },
};
</script>
