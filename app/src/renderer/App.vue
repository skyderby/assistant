<template>
  <div id='#app'>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>


  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background: #f8f8f8;
    background-position: center;
    display: flex;
    font-family: 'Futura Normal';
    justify-content: center;
    text-align: center;
  }
</style>
