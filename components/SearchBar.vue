<template>
  <span>
    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="search">
    <button class="btn btn-outline-success my-2 my-sm-0" @click="submitResearch">{{ $t('components.SearchBar.search') }}</button>
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
      // call twitter api
      this.$store.dispatch("tweets/fetchTweets", { search: this.search });
      e.preventDefault();
    }
  }
}
</script>