<template>
  <v-app-bar color="secondaryDark" dark>
    <v-btn class="ma-2 btn-forward" fab dark small>
      <v-icon dark>mdi-chevron-left</v-icon>
    </v-btn>

    <v-btn class="ma-2 btn-back" fab dark small>
      <v-icon dark>mdi-chevron-right</v-icon>
    </v-btn>

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
      >LOG IN</v-btn
    >

    <!-- <v-btn class="btn-login font-weight-bold" rounded large height="35">
      {{ userName }}
    </v-btn> -->

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
import { mapGetters, mapActions, mapState } from 'vuex';
import router from 'vue-router';

export default {
  name: 'Login',
  props: {},
  methods: {
    login() {
      window.location.href = 'https://auth-spotify-api.herokuapp.com/login';
      localStorage.setItem('userIsLogginIn', true);
    }
  },
  computed: {
    ...mapGetters(['userName']),
    ...mapState({
      userLoggedIn: state => state.spotify.userLoggedIn
    })
  },
  created() {},
  data: () => {
    return {};
  }
};
</script>

<style scoped lang="scss"></style>
