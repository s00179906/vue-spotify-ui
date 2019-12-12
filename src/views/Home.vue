<template>
  <div id="home">
    <h2>{{ user.email }}</h2>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex';
  import router from 'vue-router';

  export default {
    name: 'home',
    components: {},
    methods: {
      ...mapActions(['getUser'])
    },
    computed: {
      ...mapGetters(['user']),
      ...mapState([''])
    },
    created() {
      this.getUser();
    }
  };
</script>

<style lang="scss" scoped>
  #home {
    background-color: #282828;
  }
</style>
