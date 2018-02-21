<template>
  <div>
    <h1>Mappings</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Mapping name</th>
          <th>Twitter username</th>
          <th>Instagram username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mapping, index) in mappings">
          <td>
            {{index+1}}
          </td>
          <td>
            {{mapping.mapping_name}}
          </td>
          <td>
            {{mapping.twitter_username}}
          </td>
          <td>
            {{mapping.instagram_username}}
          </td>
        </tr>
      </tbody>
    </table>
    <a class="btn btn-primary" href="/mapping_new" role="button">Link</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      error: ""
    }
  },
  computed: {
    mappings() {
      return this.$store.state.mappings.mappings;
    }
  },
  created () {
    // this.$store.dispatch("mappings/fetchMappings");
    this.$store.dispatch("mappings/fetchMappingsMock");
  }
}
</script>
