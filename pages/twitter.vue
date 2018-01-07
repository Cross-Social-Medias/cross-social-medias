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

export default {
  async asyncData ({ params }) {
    const username = "AnthonyLastella";
    console.log(process.env.baseUrl);
    let { data } = await axios.get(`${process.env.baseUrl}/twitter_entry_point?username=${username}`)
    return { tweets: data.tweets, title: data.title }
  }
}
</script>