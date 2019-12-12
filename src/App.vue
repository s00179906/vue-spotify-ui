<template>
  <v-app dark>
    <v-content>
      <Login />
      <Navbar />
      <router-view />
      <Player />
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import Player from '@/components/Player.vue';
  import Login from '@/components/Login.vue';

  export default {
    name: 'App',

    components: {
      Navbar,
      Player,
      Login
    },

    data: () => ({})
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  * {
    /* background-color: #121212; */
    font-family: 'Ubuntu', 'Montserrat';
    padding: 0;
    margin: 0;
  }
</style>
