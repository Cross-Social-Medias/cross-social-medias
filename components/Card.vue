<style media="screen">
    .card {
        box-shadow:0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)
    }
</style>

<template>
    <div class="card mb-3">
      <div v-if="kind === 'twitter'">
        <twitter-content-card :twitter="infos" />
      </div>
    </div>
</template>

<script>
import TwitterContentCard from '~/components/TwitterContentCard.vue';
export default {

  components: {
    TwitterContentCard
  },
  props: {
    infos: {
      type: Object,
      required: true
    },
    kind: {
      type: String,
      required: true
    }
  }
}
</script>