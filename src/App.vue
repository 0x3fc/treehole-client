<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Hind Guntur', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #305A56;
  margin-top: 60px;
  font-size: 16px;
}

.created-date {
    text-align: right;
    font-size: 14px;
    color: #5e8581;
}
</style>
