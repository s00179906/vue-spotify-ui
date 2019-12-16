<template>
  <div id="home">
    <!-- <h2 v-if="user">{{ user.email }}</h2> -->
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import router from 'vue-router';

export default {
  name: 'home',
  components: {},
  methods: {
    ...mapActions(['getAuthUser'])
  },
  computed: {
    ...mapGetters(['user']),
    ...mapState([''])
  },
  created() {
    // this.getAuthUser()
    //   .then(res => console.log(res))
    //   .catch(error => console.log(error));
  }
};
</script>

<style lang="scss" scoped>
#home {
  background-color: #121212;
  height: 100%;
}
</style>
