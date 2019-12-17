<template>
  <v-app dark>
    <v-content>
      <Header />
      <Navbar />
      <router-view />
      <Player />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Player from '@/components/Player.vue';
import Header from '@/components/Header.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    Navbar,
    Player,
    Header
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
* {
  padding: 0;
  margin: 0;
}
</style>
