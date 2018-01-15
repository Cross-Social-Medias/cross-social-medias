<template>
  <span>
    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="search">
    <button class="btn btn-outline-success my-2 my-sm-0" @click="submitResearch">Search</button>
  </span>
</template>

<script>
export default {
  data () {
    return {
      search: "AnthonyLastella"
    }
  },
  methods: {
    submitResearch (e) {
      this.$emit("on-submit", this.search);
      e.preventDefault();
    }
  }
}
</script>