<template>
  <div id="login">
    <v-btn
      rounded
      large
      light
      href="https://auth-spotify-api.herokuapp.com/login"
      >Login</v-btn
    >
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
