<template>
  <div>
    <div class="card-body">
      <div v-if="twitter.extended_entities">
        <div v-for="(val, key, index) in twitter.extended_entities.media">
            <div v-if="val.type == 'video' ">
                <div v-if="val.video_info.variants">
                    <div class="embed-responsive embed-responsive-16by9">
                        <video class="embed-responsive-item" controls :poster="val.media_url_https">
                            <source :src="val.video_info.variants[0].url" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
            <div v-else-if="val.type == 'photo' ">
                <img class="card-img-top" :src="val.media_url_https" alt="Card image cap">
            </div>
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