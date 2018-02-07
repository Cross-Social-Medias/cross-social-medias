<template>
    <div class="card text-white bg-dark mb-3">
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