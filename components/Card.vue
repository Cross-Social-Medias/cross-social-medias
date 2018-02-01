<template>
    <div class="card">
      <div v-if="tweet.entities.media">
        <div v-for="(val, key, index) in tweet.entities.media">
          <img :src="tweet.entities.media[0].media_url_https" style="height:70px;width:auto"/>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">{{ tweet.text }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ tweet.created_at }}</small>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    tweet: {
      type: Object,
      required: true
    }
  }
}
</script>