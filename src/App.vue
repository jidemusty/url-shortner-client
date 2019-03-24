<template>
  <div id="app">
    <message />
    <router-view/>
  </div>
</template>

<script>
import Message from '@/app/global/components/Message'

export default {
  name: 'App',
  components: {
    Message
  }
}
</script>

<style lang="scss">
@import '~styles/app.scss';

* {
  box-sizing: border-box;
}

body, html {
  height: 100%
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2C3E50;
  margin: 0;
  background: #FFC500;
  background: linear-gradient(to left, #FFC500, #FFA500);
}

#app {
  height: 100%;
}
</style>
