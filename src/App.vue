<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  @import "assets/reset.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .icon-xin{
    cursor: pointer;
  }
  a,button,input{
    tap-highlight-color:transparent;
    -webkit-tap-highlight-color:transparent;
    outline: none;
  }
</style>
