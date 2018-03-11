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
        return this.parseHashtag(this.parseUsername(this.parseUrl(this.text)));
      }
    },
    methods: {
      parseUrl(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function(url) {
          return '<a href="' + url + '">' + url + '</a>';
        });
      },
      parseUsername(text) {
        return text.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
          var username = u.replace("@", "");
          return u.link("https://twitter.com/" + username);
        });
      },
      parseHashtag(text) {
        return text.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
          var tag = t.replace("#", "");
          return t.link("https://twitter.com/hashtag/" + tag);
        });
      }
    }
  }
</script>
