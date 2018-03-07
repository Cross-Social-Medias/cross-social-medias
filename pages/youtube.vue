<template>
  <div>
    <div v-if="error.length > 0">
      <div class="alert alert-danger">{{ error }}</div>
    </div>
    <div v-else>
      <div v-if="videos === null">
        <p class="text-center">
          <i class="fa fa-refresh fa-spin big-icon text-secondary" aria-hidden="true"></i>
        </p>
      </div>
      <div v-else-if="videos.length > 0">
        <h1> {{ $t('pages.youtube.title') }} </h1>
        <div class="card-columns">
          <card
              kind="youtube_video"
            v-for="video in videos"
              :key="video.channelId"
              :infos="video"
          />
        </div>
      </div>
      <div v-else>
        <div class="alert alert-info">{{ $t('pages.youtube.channel_not_exist') }}</div>
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
      channelId() {
        return "UCrurr3qbH0VFCwaoIvXOn-Q";
      },
      videos() {
        return this.$store.state.youtube_video.videos;
      },
      error() {
        return this.$store.state.youtube_video.error;
      }
    },
    created () {
      if (!this.$store.state.youtube_video.videos) {
        this.$store.dispatch("youtube_video/fetchVideos", { channelId: this.channelId });
      }
    }
  }
</script>