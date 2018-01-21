<template>
  <div>
    <h1>{{ title }}</h1>
      <ul>
        <li v-for="tweet in tweets">
          {{ tweet.text }}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      tweets: [],
      title: ""
    }
  },
  computed: {
    search () {
      return this.$store.state.research.research;
    }
  },
  created () {
    this.callApi();
  },
  methods: {
    callApi () {
      axios.get(`${process.env.baseUrl}/twitter_entry_point?username=${this.search}`)
        .then(response => {
          this.tweets = response.data.tweets;
          this.title = response.data.title;
        })
        .catch(e => {
          console.log(e);
        })
    }
  },
  watch: {
    search (val) {
      this.callApi();
    }
  }
}
</script>