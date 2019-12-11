<template>
  <div id="login">
    <div
      class="btn-container 
             d-flex 
             justify-space-between 
             align-center
             ma-3"
    >
      <div>
        <v-btn class="ma-2 btn-forward" fab dark small>
          <v-icon dark>mdi-chevron-left</v-icon>
        </v-btn>

        <v-btn class="ma-2 btn-back" fab dark small>
          <v-icon dark>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <div>
        <v-btn text dark class="btn-signup font-weight-bold ma-2"
          >SIGN UP</v-btn
        >
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
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import router from 'vue-router';

  export default {
    name: 'Login',
    props: {},
    methods: {
      ...mapActions(['getUser', 'setToken']),

      async getToken() {
        const highlight = 'background: #444; color: orange';

        const { access_token, refresh_token } = await JSON.parse(
          localStorage.getItem('tokens')
        );

        console.log('%c access_token is: ', highlight, access_token);
        console.log('%c refresh_token is: ', highlight, refresh_token);
      }
    },
    computed: mapGetters([]),
    created() {
      this.setToken();

      this.getToken();
    }
  };
</script>

<style scoped lang="scss">
  #login {
    background-color: #0b0b0b;
    height: 12%;
    width: 85%;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
