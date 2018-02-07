<template>
<div>
  <div v-if="error.length > 0">
    <div class="alert alert-danger">{{ error }}</div>
  </div>
  <div v-else>
    <div v-if="tweets.length > 0">
      <h1> {{ title }} </h1>
      <div class="card-columns">
        <card
            kind="twitter"
          v-for="tweet in tweets"
            :key="tweet.id"
            :infos="tweet"
        />
      </div>
    </div>
    <div v-else>
      <div class="alert alert-info">User not exist</div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Card from '~/components/Card.vue';

export default {
  components: {
    Card
  },
  data () {
    return {
      tweets: [],
      title: "",
      error: ""
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
          this.error = "";
        })
        .catch(e => {
          this.error = "Something went wrong. Try again !";
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