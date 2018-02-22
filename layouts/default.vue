<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <a class="navbar-brand" href="#">POC cross social media</a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/twitter">Twitter</a></i>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Instagram</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Facebook</a>
          </li>
          <li class="divider-vertical"></li>
          <li class="nav-item">
            <a class="nav-link" href="/mappings">Mappings</a>
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
    methods: {
      updateResearch (newSearch) {
        this.$store.commit('research/update', newSearch);
      }
    }
  }
</script>
