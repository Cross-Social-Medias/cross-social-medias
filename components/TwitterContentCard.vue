<template>
  <div>
    <div class="card-body">
      <div v-if="twitter.entities.media">
        <div v-for="(val, key, index) in twitter.entities.media">
          <img class="card-img-top" :src="val.media_url_https" alt="Card image cap">
        </div>
      </div>
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