<template>
  <v-app-bar color="secondaryDark" dark>
    <!-- <v-btn class="ma-2 d-md-none" fab dark small>
      <v-icon dark>mdi-menu</v-icon>
    </v-btn> -->

    <v-btn @click="goBack" class="ma-2  d-none d-md-flex" fab dark small>
      <v-icon dark>mdi-chevron-left</v-icon>
    </v-btn>

    <v-btn @click="goForward" class="ma-2 d-none d-md-flex" fab dark small>
      <v-icon dark>mdi-chevron-right</v-icon>
    </v-btn>

    <Search />

    <v-spacer></v-spacer>

    <v-btn
      class="btn-login font-weight-bold"
      rounded
      large
      light
      color="success"
      width="130"
      height="30"
      @click="login"
      v-if="!userLoggedIn"
      >LOG IN</v-btn
    >

    <!-- <v-btn
      class="font-weight-bold d-none d-md-flex"
      rounded
      large
      light
      color="warning"
      width="130"
      height="30"
      @click="logout"
      v-if="userLoggedIn"
      >LOG OUT</v-btn
    > -->
    <v-btn
      class="font-weight-bold d-none d-md-flex text-truncate"
      style="font-size:10px; text-transform: lowercase"
      rounded
      dark
      @click="logout"
      v-if="userLoggedIn && user"
    >
      <v-avatar size="28px" class="mr-2 ml-0">
        <v-img :lazy-src="user.images[0].url" alt="John" />
      </v-avatar>
      {{ user.display_name }}</v-btn
    >

    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import Search from '@/components/Search.vue';
import { mapGetters, mapActions, mapState } from 'vuex';
import router from 'vue-router';

export default {
  name: 'Login',
  props: {},
  components: {
    Search
  },
  methods: {
    ...mapActions['login'],
    logout() {
      localStorage.clear();
      window.location.href =
        'accounts.spotify.com/en/logout?continue=https%3A%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Dstreaming%2520app-remote-control%2520user-read-private%2520user-library-read%2520user-read-email%2520user-read-currently-playing%2520user-modify-playback-state%2520user-read-playback-state%2520user-follow-read%2520user-follow-modify%2520user-top-read%2520user-read-recently-played%2520playlist-read-collaborative%2520playlist-modify-public%2520playlist-read-private%2520playlist-modify-private%26response_type%3Dcode%26redirect_uri%3Dhttps%3A%252F%252Fauth-spotify-api.herokuapp.com%252Fcallback%26state%3DQRcfjHAPXBFyhnVU%26client_id%3De8794524c32b40ffbffdd5db2b98d77b';
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  },
  computed: {
    ...mapState({
      userLoggedIn: state => state.spotify.userLoggedIn,
      user: state => state.spotify.user
    })
  },
  created() {},
  data: () => {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
