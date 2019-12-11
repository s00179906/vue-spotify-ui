<template>
  <v-app>
    <v-content>
      <Navbar />
      <Home />
      <Player />
    </v-content>
  </v-app>
</template>

<script>
  import Home from '@/views/Home.vue';
  import Navbar from '@/components/Navbar.vue';
  import Player from '@/components/Player.vue';

  export default {
    name: 'App',

    components: {
      Home,
      Navbar,
      Player
    },

    data: () => ({})
  };
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  * {
    background-color: #121212;
    text-decoration: none;
    font-family: 'Ubuntu', 'Montserrat';
    padding: 0;
    margin: 0;
    color: #fff;
  }
</style>
