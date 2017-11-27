<template>
  <section class="container">
    <div class="row">
      <feednews/>
      <feednews/>
      <feednews/>
    </div>
  </section>
</template>

<script>
  import Feednews from '~/components/Feednews.vue'

  export default {
    components: {
      Feednews
    }
  }
</script>
<style src="~/assets/css/index.css"></style>
