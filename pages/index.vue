<template>
  <div>
    <section>
      <div class="row">
        <feednews
          v-for="provider in providers"
          :key="provider.id"
          :provider="provider"
        />
      </div>
    </section>
    <footer class="footer">
      <nuxt-link :to="$i18n.path('about')">{{ $t('pages.about.title') }}</nuxt-link>
    </footer>
  </div>
</template>

<script>
  import Feednews from '~/components/Feednews.vue';

  let nextTodoId = 1

  export default {
    components: {
      Feednews
    },
    data () {
      return {
        providers: [
          {
            id: nextTodoId++,
            text: 'Twitter'
          },
          {
            id: nextTodoId++,
            text: 'Instagram'
          },
          {
            id: nextTodoId++,
            text: 'Facebook'
          }
        ]
      }
    }
  }
</script>
<style src="~/assets/css/index.css"></style>
