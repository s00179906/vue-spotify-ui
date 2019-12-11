<template>
  <div>
    <a href="https://auth-spotify-api.herokuapp.com/login">Login</a>
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

<style scoped lang="scss"></style>
