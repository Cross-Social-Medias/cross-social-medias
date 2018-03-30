<template>
  <div class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" style="position:relative" v-bind:class="{'open':openSuggestion}">
    <input class="form-control" type="text" v-model="selection"
        @keydown.enter = 'enter'
        @keydown.down = 'down'
        @keydown.up = 'up'
        @input = 'change'
        v-on:blur= 'close'
    />
    <ul class="list-group" style="width:100%">
      <li v-for="(suggestion, index) in matches"
          v-bind:class="{'active': isActive(index), 'list-group-item': true}"
          @click="suggestionClick(index)">
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        open: false,
        current: 0,
        selection: ''
      }
    },
    props: {
      suggestions: {
        type: Array,
        required: true
      }
    },
    computed: {
      matches() {
        const matches = this.suggestions.filter((str) => str.toLowerCase().includes(this.selection.toLowerCase()));
        return matches;
      },
      openSuggestion() {
        return this.selection !== "" && this.matches.length !== 0 && this.open === true;
      }
    },
    methods: {
      enter() {
        this.selection = this.matches[this.current];
        this.open = false;
        this.$emit("on-click", this.selection);
      },
      up() {
        if (this.current > 0) {
          this.current--;
        }
      },
      down() {
        if (this.current < this.matches.length - 1) {
          this.current++;
        }
      },
      isActive(index) {
        return index === this.current;
      },
      change() {
        if (this.open === false) {
          this.open = true;
          this.current = 0;
        }
      },
      close() {
        console.log("close")
        this.open = false;
      },
      suggestionClick(index) {
        this.selection = this.matches[index];
        this.open = false;
        this.$emit("on-click", this.selection);
      }
    },
    watch: {
      selection(newValue) {
        this.$emit("on-change", newValue);
      }
    }
  }
</script>