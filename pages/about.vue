<template>
  <div>
    <p>{{ $t('pages.about.project_sentence') }}<a href="https://twitter.com/dupont_bertrand">@ber</a> {{ $t('general.and') }} <a href="https://twitter.com/zemog_emualliug">@zemog_emualliug</a></p>
    <p>
      {{ $t('general.go_back') }}
      <nuxt-link to="/">{{ $t('layouts.default.home') }}</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
}
</script>
