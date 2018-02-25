<template>
  <div>
    <h1>Create a new mapping</h1>
    <form @submit.prevent="submit_mapping">
      <div class="form-group">
        <label for="mapping_name">Mapping name</label>
        <input v-model="mapping_name" class="form-control" id="mapping_name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Twitter mapping</label>
        <input v-model="twitter_username" class="form-control" id="twitter_username">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Instagram mapping</label>
        <input v-model="instagram_username" class="form-control" id="instagram_username">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
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
  methods: {
    submit_mapping() {
      const mapping = { mapping_name: this.mapping_name, twitter_username: this.twitter_username, instagram_username: this.instagram_username };
      // this.$store.dispatch("mappings/addMapping", { mapping });
      this.$store.dispatch("mappings/addMappingMock", { mapping })
        .then(() => this.$router.push({ path: 'mappings' }))
        .catch(() => (this.error = "Error !"));
    }
  }
}
</script>
