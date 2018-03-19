<template>
  <div>
    <h1>{{ $t('pages.mapping_new.title') }}</h1>
    <form @submit.prevent="submit_mapping">
      <div class="form-group">
        <label for="mapping_name">{{ $t('pages.mapping_new.mapping_name') }}</label>
        <input v-model="mapping_name" class="form-control" id="mapping_name">
        <small id="mapping_name_help" class="form-text text-muted">{{ $t('pages.mapping_new.mapping_name_help') }}</small>
      </div>
      <div class="form-group">
        <label for="twitter_username">{{ $t('pages.mapping_new.twitter_username') }}</label>
        <input v-model="twitter_username" class="form-control" id="twitter_username">
        <small id="twitter_username_help" class="form-text text-muted">{{ $t('pages.mapping_new.twitter_username_help') }}</small>
      </div>
      <div class="form-group">
        <label for="instagram_username">{{ $t('pages.mapping_new.instagram_username') }}</label>
        <input v-model="instagram_username" class="form-control" id="instagram_username">
        <small id="instagram_username_help" class="form-text text-muted">{{ $t('pages.mapping_new.instagram_username_help') }}</small>
      </div>
      <div class="form-group">
        <label for="youtube_channel_id">{{ $t('pages.mapping_new.youtube_channel_id') }}</label>
        <input v-model="youtube_channel_id" class="form-control" id="youtube_channel_id">
        <small id="youtube_channel_id_help" class="form-text text-muted">{{ $t('pages.mapping_new.youtube_channel_id_help') }}</small>
      </div>
      <button type="submit" class="btn btn-primary">{{ $t('pages.mapping_new.submit') }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: "",
      mapping_name: null,
      twitter_username: null,
      instagram_username: null,
      youtube_channel_id: null
    }
  },
  computed: {
    user () { return (this.$store.state.auth || {}).user || null }
  },
  methods: {
    submit_mapping() {
      const mapping = {
        mapping_name: this.mapping_name,
        twitter_username: this.twitter_username,
        instagram_username: this.instagram_username,
        youtube_channel_id: this.youtube_channel_id,
        created_by: this.user.id,
        user_id: this.user.id
      };
      this.$store.dispatch("mappings/addMapping", { mapping })
        .then(() => this.$router.push({ path: 'mappings' }))
        .catch(() => (this.error = "Error !"));
    }
  }
}
</script>
