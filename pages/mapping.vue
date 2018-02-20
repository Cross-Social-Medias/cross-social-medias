<template>
  <div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mappings: null,
      error: ""
    }
  },
  created () {
    this.$store.dispatch("mappings/fetchMappings");
  }
}
</script>
