<template>
  <div>
    <div v-if="tweets.length > 0">
      <h1>{{ title }}</h1>
        <ul>
        <li v-for="tweet in tweets">
          {{ tweet.text }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>User not exist</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData ({ params }) {
    const username = "AnthonyLastella";
    console.log(process.env.baseUrl);
    let { data } = await axios.get(`${process.env.baseUrl}/twitter_entry_point?username=${username}`)
    return { tweets: data.tweets, title: data.title }
  }
}
</script>