<template>
  <div class="col-md-4">
    <a v-if="provider.text === 'Twitter' "href="/twitter">
      <h3>{{ $t('components.Feednews.social_media_news_from') }} {{ provider.text }}</h3>
    </a>
    <h3 v-else>{{ $t('components.Feednews.social_media_news_from') }} {{ provider.text }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    provider: {
      type: Object,
      required: true
    }
  }
}
</script>