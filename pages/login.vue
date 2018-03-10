<template>
  <div>
    <h1>Log In</h1>
    <form @submit.prevent="submit_login">
      <div v-if="alert" :class="['alert', 'alert-' + alert.type]" role="alert">
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
      <button type="submit" class="btn btn-primary">Submit</button>
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
      submit_login () {
        this.alert = null;
        this.loading = true;
        this.$store.dispatch('auth/login', {
        // this.$store.dispatch('auth/loginMock', {
          email: this.email,
          password: this.password
        }).then((result) => {
          this.alert = { type: 'success', message: result.data.message };
          this.loading = false;
          this.$router.push({ path: 'admin' });
        }).catch(error => {
          this.loading = false;
          if (error.response && error.response.data) {
            this.alert = {type: 'danger', message: error.response.data.message || error.reponse.status};
          }
        })
      }
    }
  }
</script>