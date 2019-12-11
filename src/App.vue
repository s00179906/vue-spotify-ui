<template>
  <v-app>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
  import Home from './views/Home.vue';

  export default {
    name: 'App',

    components: {
      Home
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
  }
</style>
