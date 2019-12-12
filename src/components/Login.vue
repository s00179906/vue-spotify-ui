<template>
  <div>
    <v-app-bar color="secondaryDark" dark>
      <v-btn class="ma-2 btn-forward" fab dark small>
        <v-icon dark>mdi-chevron-left</v-icon>
      </v-btn>

      <v-btn class="ma-2 btn-back" fab dark small>
        <v-icon dark>mdi-chevron-right</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn text dark class="btn-signup font-weight-bold ma-2">SIGN UP</v-btn>
      <v-btn
        class="btn-login font-weight-bold"
        rounded
        large
        light
        color="success"
        width="130"
        height="30"
        href="https://auth-spotify-api.herokuapp.com/login"
        >LOG IN</v-btn
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
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import router from 'vue-router';

  export default {
    name: 'Login',
    props: {},
    methods: {
      ...mapActions(['setToken'])
    },
    computed: mapGetters([]),
    created() {
      this.setToken();
    }
  };
</script>

<style scoped lang="scss"></style>
