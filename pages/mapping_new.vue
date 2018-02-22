<template>
  <div>
    <h1>Create a new mapping</h1>
    <form v-on:submit="submit_mapping" action="#" method="post">
      <div class="form-group">
        <label for="mapping_name">Mapping name</label>
        <input v-model="mapping_name" class="form-control" id="mapping_name">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Twitter mapping</label>
        <input v-model="twitter_mapping" class="form-control" id="twitter_mapping">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Instagram mapping</label>
        <input v-model="instagram_mapping" class="form-control" id="instagram_mapping">
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
      twitter_mapping: null,
      instagram_mapping: null
    }
  },
  methods: {
    submit_mapping(e) {
      const mapping = { mapping_name: this.mapping_name, twitter_mapping: this.twitter_mapping, instagram_mapping: this.instagram_mapping };
      // this.$store.dispatch("mappings/addMapping", { mapping });
      this.$store.dispatch("mappings/addMappingMock", { mapping });
    }
  }
}
</script>
