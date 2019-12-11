<template>
  <div id="home">
    <Login />
    <Player />
  </div>
</template>

<script>
  import Login from '@/components/Login.vue';
  import Player from '@/components/Player.vue';

  export default {
    name: 'home',
    components: {
      Login,
      Player
    }
  };
</script>

<style lang="scss" scoped>
  #home {
    height: 100%;
  }
</style>
