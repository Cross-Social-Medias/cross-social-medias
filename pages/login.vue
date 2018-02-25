<template>
  <div>
    <h1>Log In</h1>
    <form @submit.prevent="submit">
      <div v-if="alert" class="alert alert-danger" role="alert">
        {{alert.message}}
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" class="form-control" id="password">
      </div>
      <button type="submit" class="btn btn-primary" :loading="loading" :disabled="loading">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    layout: 'fullscreen',
    data () {
      return {
        email: '',
        password: '',
        alert: null,
        loading: false
      }
    },
    methods: {
      submit () {
        // ...
      }
    }
  }
</script>