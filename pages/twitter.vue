<template>
  <div>
    <h1>{{ title }}</h1>
      <ul id="example-1">
  	  <li v-for="tweet in tweets">
        {{ tweet.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      search: ""
    }
  },
  computed: {
    ...mapGetters({
      research: 'getResearch'
    })
  },
  async asyncData ({ store }) {
    const username = "AnthonyLastella";
    // console.log(this.bite);
    console.info("jkjkjkjjkj ", store.state.research);
    let { data } = await axios.get(`${process.env.baseUrl}/twitter_entry_point?username=${username}`)
    return { tweets: data.tweets, title: data.title }
  }
}
</script>