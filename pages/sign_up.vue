<template>
  <div>
    <h1>{{ $t('pages.sign_up.title') }}</h1>
     <form @submit.prevent="sign_up">
        <div v-if="alert" :class="['alert', 'alert-' + alert.type]" role="alert">
          {{alert.message}}
        </div>
        <div class="form-group">
          <label for="username"><b>{{ $t('pages.sign_up.username') }}</b></label>
          <input v-model="username" class="form-control" id="username" required>
        </div>
        <div class="form-group">
          <label for="email"><b>{{ $t('pages.sign_up.email') }}</b></label>
          <input v-model="email" class="form-control" placeholder="Enter Email" name="email" required>
        </div>
        <div class="form-group">
          <label for="password"><b>{{ $t('pages.sign_up.password') }}</b></label>
          <input v-model="password" type="password" class="form-control" placeholder="Enter Email" name="password" required>
        </div> 
        <div class="form-group">
          <label for="password-repeat"><b>{{ $t('pages.sign_up.reset-password') }}</b></label>
          <input v-model="repeat_password" type="password" class="form-control" placeholder="Repeat Password" name="password-repeat" required>
        </div>

        <button type="submit" class="btn btn-primary">{{ $t('pages.sign_up.submit') }}</button>
    </form>
  </div>
</template>

<script>
  import api from '~/api'

  export default {
    data () {
      return {
        username: '',
        email: '',
        password: '',
        repeat_password: '',
        alert: null,
        loading: false
      }
    },
    methods: {
      sign_up () {
        this.alert = null;
        this.loading = true;
        if (this.password !== this.repeat_password) {
          this.alert = { type: 'danger', message: this.$t('pages.sign_up.invalid_password') };
        }
        const data = { stooge: this.username, email: this.email, password: this.password };
        api.auth.sign_up(data)
          .then(response => {
            this.error = "";
            this.$router.push({ path: 'login' });
          })
          .catch(e => {
            this.error = "Something went wrong. Try again !";
          })
      }
    }
  }
</script>