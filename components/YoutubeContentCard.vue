<template>
  <div>
    <div class="card-body">
      <a :href="`https://www.youtube.com/watch?v=${youtube.videoId}`" >
        Link
      </a>
      <p>{{ youtube.title }}</p>
      <p>{{ youtube.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      youtube: {
        type: Object,
        required: true
      }
    }
  }
</script>