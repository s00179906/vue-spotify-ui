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
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    Navbar,
    Player,
    Login
  },
  methods: {
    ...mapActions(['setTokens', 'setUserLoggedIn'])
  },
  created() {
    localStorage.setItem('userIsLogginIn', false);
    if (this.userLoggedIn) {
      this.setTokens();
      this.setUserLoggedIn();
    }
  },
  data: () => {
    return {
      userLoggedIn: localStorage.getItem('userIsLogginIn')
    };
  }
};
</script>

<style lang="scss">
/* @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap'); */

* {
  /* font-family: 'Poppins', sans-serif; */

  padding: 0;
  margin: 0;
}
</style>
