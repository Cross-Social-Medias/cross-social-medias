<template>
  <div>
    <h1>{{ $t('pages.mappings.title') }}</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>{{ $t('pages.mappings.mapping_name') }}</th>
          <th>{{ $t('pages.mappings.twitter_username') }}</th>
          <th>{{ $t('pages.mappings.instagram_username') }}</th>
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
    <nuxt-link to="/mapping_new" class="btn btn-primary">New mapping</nuxt-link>
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
    if (!this.mappings) {
      this.$store.dispatch("mappings/fetchMappings");
    }
  }
}
</script>
