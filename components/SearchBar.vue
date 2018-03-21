<template>
  <span>
    <autocomplete :suggestions="cities" :selection.sync="value"></autocomplete>
          
    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="search">
    <button class="btn btn-outline-success my-2 my-sm-0" @click="submitResearch">{{ $t('components.SearchBar.search') }}</button>
  </span>
</template>

<script>
import Autocomplete from '~/components/Autocomplete.vue';

export default {
  components: {
    Autocomplete
  },
  data () {
    return {
      value: '',
      search: this.$store.state.research.research,
      cities: ["Paris", "Singapore", "New York", "Avignon", "Test", "Marseille"]
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