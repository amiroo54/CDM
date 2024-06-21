<template>
    <input type="checkbox" :value="url" @change="updateSelection">
    <p> {{ url }} </p>
  </template>
  
  <script>
  export default {
    props: {
      url: String,
      value: String
    },
    methods: {
      updateSelection(event) {
        this.$emit('checkbox-updated', { url: this.url, checked: event.target.checked });
      }
    }
  }
  </script>