<template>
  <div id="home">
    <!-- <Navbar /> -->
    <Login />
    <!-- <Player /> -->
  </div>
</template>

<script>
  import Login from '@/components/Login.vue';
  // import Player from '@/components/Player.vue';
  // import Navbar from '@/components/Navbar.vue';

  export default {
    name: 'home',
    components: {
      Login
      // Player
      // Navbar
    }
  };
</script>

<style lang="scss" scoped>
  #home {
    height: 100%;
  }
</style>
