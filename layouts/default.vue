<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <nuxt-link class="navbar-brand" :to="$i18n.path('')">{{ $t('layouts.default.software_name') }}</nuxt-link>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" :to="$i18n.path('')">{{ $t('layouts.default.home') }}<span class="sr-only">(current)</span></nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="$i18n.path('twitter')">{{ $t('layouts.default.twitter') }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" :to="$i18n.path('youtube')">{{ $t('layouts.default.youtube') }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link disabled" to="#">{{ $t('layouts.default.instagram') }}</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link disabled" to="#">{{ $t('layouts.default.facebook') }}</nuxt-link>
          </li>
          <li class="divider-vertical"></li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="$i18n.path('mappings')">{{ $t('layouts.default.mappings') }}</nuxt-link>
          </li>
          <li v-if="user" class="nav-item">
            <nuxt-link class="nav-link" @click="logOut">{{ $t('layouts.default.logout') }}</nuxt-link>
          </li>
          <li v-else>
            <nuxt-link class="nav-link" to="/login">{{ $t('layouts.default.login') }}</nuxt-link>
          </li>
          <li v-if="user" class="nav-item">
            <nuxt-link class="nav-link" to="/admin">{{ $t('layouts.default.admin') }}</nuxt-link>
          </li>
          <li v-else>
            <nuxt-link class="nav-link" to="/sign_in">{{ $t('layouts.default.sign_in') }}</nuxt-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <searchBar @on-submit="updateResearch">
          </searchBar>
        </form>
      </div>
    </nav>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import SearchBar from '~/components/SearchBar.vue';

  export default {
    components: {
      SearchBar
    },
    data () {
      return {}
    },
    computed: {
      user () { return (this.$store.state.auth || {}).user || null }
    },
    methods: {
      updateResearch (newSearch) {
        this.$store.dispatch('research/update', {search: newSearch});
      },
      logOut() {
        this.$store.dispatch('auth/reset')
          .then(() => {
            this.$router.push('/');
          });
      }
    }
  }
</script>