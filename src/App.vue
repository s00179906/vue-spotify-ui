<template>
  <v-app dark>
    <v-content>
      <Header />
      <Navbar />
      <router-view />
      <Player />
      <Tabs />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Player from '@/components/Player.vue';
import Header from '@/components/Header.vue';
import Tabs from '@/components/Tabs.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    Navbar,
    Player,
    Header,
    Tabs
  },
  methods: {
    ...mapActions(['setTokens', 'login', 'getRefreshToken'])
  },
  async created() {
    window.setInterval(() => {
      this.getRefreshToken();
    }, 1000 * 60 * 55);
    if (!this.userLoggedIn) {
      await this.login();
    }

    if (this.userLoggedIn && !this.isTokenSet) {
      await this.setTokens();
    }
  },
  data: () => {
    return {
      userLoggedIn: localStorage.getItem('userIsLogginIn'),
      isTokenSet: localStorage.getItem('isTokenSet')
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
