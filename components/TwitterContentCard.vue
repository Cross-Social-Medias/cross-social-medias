<template>
    <div class="card">
      <div v-if="twitter.entities.media">
        <div v-for="(val, key, index) in twitter.entities.media">
          <img :src="twitter.entities.media[0].media_url_https" style="height:70px;width:auto"/>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">{{ twitter.text }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ twitter.created_at }}</small>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    twitter: {
      type: Object,
      required: true
    }
  }
}
</script>