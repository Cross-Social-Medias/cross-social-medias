<template>
  <div>
    <div v-if="error.length > 0">
      <div class="alert alert-danger">{{ error }}</div>
    </div>
    <div v-else>
      <div v-if="tweets === null">
        <p class="text-center">
          <i class="fa fa-refresh fa-spin big-icon text-secondary" aria-hidden="true"></i>
        </p>
      </div>
      <div v-else-if="tweets.length > 0">
        <h1>{{ title }}</h1>
          <ul>
          <li v-for="tweet in tweets">
            {{ tweet.text }}
          </li>
        </ul>
      </div>
      <div v-else>
        <div class="alert alert-info">User not exist</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      tweets: null,
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
          this.error = "Something went wrong. The user does not exist or there is a network issue. Please Try again !";
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