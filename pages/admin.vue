<template>
  <div>
    <h1>Admin page</h1>
    <div v-if="user">
      <p>Hello, {{user.email}}</p>
      <button class="btn btn-primary" role="button" @click="logOut">Log out</button>
    </div>
    <div v-else>
      <p>The user is not authenticated!</p>
    </div>
    <br/>
    <button class="btn btn-primary" role="button" @click="checkMe">Check Me</button>
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
      // this.$store.dispatch('auth/fetch');
      this.$store.dispatch('auth/fetchMock');
    }
  }
}
</script>