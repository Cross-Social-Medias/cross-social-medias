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
        <div class="alert alert-info">{{ $t('pages.twitter.user_not_exist') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '~/components/Card.vue';

  export default {
    components: {
      Card
    },
    computed: {
      search() {
        return this.$store.state.research.research;
      },
      tweets() {
        return this.$store.state.tweets.tweets;
      },
      title() {
        return this.$store.state.tweets.title;
      },
      error() {
        return this.$store.state.tweets.error;
      }
    },
    created () {
      if (!this.$store.state.tweets.tweets) {
        this.$store.dispatch("tweets/fetchTweets", { search: this.search });
      }
    }
  }
</script>