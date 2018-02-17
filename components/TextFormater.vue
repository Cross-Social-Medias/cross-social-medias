<template>
  <p v-html="convertedText">
  </p>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      convertedText() {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return this.text.replace(urlRegex, function(url) {
          return '<a href="' + url + '">' + url + '</a>';
        });
      }
    }
  }
</script>