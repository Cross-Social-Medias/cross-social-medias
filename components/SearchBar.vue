<template>
  <span>
    <input v-model="search"class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </span>
</template>

<script>
export default {
  props: {
    search: {
      type: String,
      required: true
    }
  }
}
</script>