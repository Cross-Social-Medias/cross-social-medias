<template>
  <div>
    <h1>{{ $t('pages.admin.title') }}</h1>
    <div v-if="user">
      <p>Hello, {{user.email}}</p>
      <button class="btn btn-primary" role="button" @click="logOut">{{ $t('pages.admin.logout') }}</button>
    </div>
    <div v-else>
      <p>{{ $t('pages.admin.unauthenticated') }}</p>
    </div>
    <br/>
    <button class="btn btn-primary" role="button" @click="checkMe">{{ $t('pages.admin.check_me') }}</button>
  </div>
</template>
<script>
export default {
  computed: {
    user () { return (this.$store.state.auth || {}).user || null }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/reset')
        .then(() => {
          this.$router.push('/');
        });
    },
    checkMe() {
      this.$store.dispatch('auth/fetch');
      // this.$store.dispatch('auth/fetchMock');
    }
  }
}
</script>