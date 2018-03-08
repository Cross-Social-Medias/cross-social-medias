<template>
  <div>
    <div class="card-body">
      <img 
      <a :href="`https://www.youtube.com/watch?v=${youtube.videoId}`" >
        <img :src="youtube.thumbnail.url" alt="thumbnail" :height="youtube.thumbnail.height" :width="youtube.thumbnail.width">
      </a>
      <p class="card-text">{{ youtube.title }}</p>
      <text-formater :text="youtube.description" class="card-text"></text-formater>
    </div>
    <div class="card-footer">
      <small class="text-muted">{{ youtube.publishedAt }}</small>
    </div>
  </div>
</template>

<script>
  import TextFormater from "~/components/TextFormater.vue";

  export default {
    components: {
      TextFormater
    },
    props: {
      youtube: {
        type: Object,
        required: true
      }
    }
  }
</script>