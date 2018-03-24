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
      search: this.$store.state.research.research
    }
  },
  computed: {
    mapping() {
      return this.$store.state.research.mapping;
    }
  },
  methods: {
    submitResearch (e) {
      this.$emit("on-submit", this.search);
      // call twitter api
      this.$store.dispatch("research/update", { search: this.search });
      e.preventDefault();
    }
  },
  watch: {
    mapping(newValue, oldValue) {
      this.$store.dispatch("tweets/fetchTweets", { search: newValue.twitterUsername });
      this.$store.dispatch("youtube_video/fetchVideos", { channelId: newValue.youtubeId });
    }
  }
}
</script>