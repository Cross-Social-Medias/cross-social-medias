<template>
  <div>
    <h1>{{ $t('pages.mapping_new.title') }}</h1>
    <form @submit.prevent="submit_mapping">
      <div class="form-group">
        <label for="mapping_name">{{ $t('pages.mapping_new.mapping_name') }}</label>
        <input v-model="mapping_name" class="form-control" id="mapping_name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">{{ $t('pages.mapping_new.twitter_username') }}</label>
        <input v-model="twitter_username" class="form-control" id="twitter_username">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">{{ $t('pages.mapping_new.instagram_username') }}</label>
        <input v-model="instagram_username" class="form-control" id="instagram_username">
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
      instagram_username: null
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
