<template>
  <div>
    <h1>Admin page</h1>
    <p v-if="user">Hello, {{user.email}}</p>
    <p v-else>The user is not authenticated!</p>
  </div>
</template>
<script>
export default {
  computed: {
    user () { return (this.$store.state.auth || {}).user || null }
  }
}
</script>