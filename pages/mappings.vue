<template>
  <div>
    <h1>{{ $t('pages.mappings.title') }}</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>{{ $t('pages.mappings.mapping_name') }}</th>
          <th>{{ $t('pages.mappings.twitter_username') }}</th>
          <th>{{ $t('pages.mappings.youtube_channel_id') }}</th>
          <th>{{ $t('pages.mappings.instagram_username') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mapping, index) in mappings">
          <td>
            {{index+1}}
          </td>
          <td>
            <a>{{mapping.mapping_name}}</a>
          </td>
          <td>
            <a :href="'https://twitter.com/' + mapping.twitter_username">{{mapping.twitter_username}}</a>
          </td>
          <td>
            <a :href="'https://www.youtube.com/channel/' + mapping.youtube_channel_id">{{mapping.youtube_channel_id}}</a>
          </td>
          <td>
            <a :href="'https://www.instagram.com/' + mapping.instagram_username">{{mapping.instagram_username}}</a>
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
      // this.$store.dispatch("mappings/fetchMappingsMock");
      this.$store.dispatch("mappings/fetchMappings");
    }
  }
}
</script>
