<template>
  <div class="col-md-4">
    <h3>Social Network news from {{ provider.text }}</h3>
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