<template>
  <router-view></router-view>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style lang="scss">

  @import './styles/globals';
  @import './styles/fonts';

  * {
    margin: 0;
    padding: 0;
  }

  html, body, #app {height: 100%;}

  body {
    background: #f8f8f8;
    font-family: 'Futura Normal';
  }
</style>
