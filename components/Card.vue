<template>
    <div class="card">
      <div v-if="infos.entities.media">
        <div v-for="(val, key, index) in infos.entities.media">
          <img :src="infos.entities.media[0].media_url_https" style="height:70px;width:auto"/>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">{{ infos.text }}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ infos.created_at }}</small>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    infos: {
      type: Object,
      required: true
    },
    kind: {
      type: String,
      required: true
    }
  }
}
</script>