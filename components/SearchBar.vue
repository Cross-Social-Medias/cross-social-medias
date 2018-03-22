<template>
  <span>
    <autocomplete :suggestions="suggestionMappingsUsername" @on-click="updateSearch" @on-change="findMappings"></autocomplete>
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
      search: this.$store.state.research.research
    }
  },
  computed: {
    mapping() {
      return this.$store.state.research.mapping;
    },
    suggestionMappings() {
      return (this.$store.state.research.suggestionMappings || []).slice();
    },
    suggestionMappingsUsername() {
      return (this.$store.state.research.suggestionMappings || []).slice().map(item => item.mapping_name);
    }
  },
  methods: {
    submitResearch (e) {
      this.$emit("on-submit", this.search);
      const mapping = this.suggestionMappings.find(mapping => mapping.mapping_name === this.search);
      this.$store.dispatch("research/update", { mapping });
      e.preventDefault();
    },
    updateSearch(newSearch) {
      const mapping = this.suggestionMappings.find(mapping => mapping.mapping_name === newSearch);
      this.$store.dispatch("research/update", { mapping });
      this.search = newSearch;
    },
    findMappings(currentSearch) {
      this.$store.dispatch("research/search", { search: currentSearch });
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