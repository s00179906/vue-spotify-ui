<template>
  <div>
    <h1>Your Library</h1>

    <!-- <div v-for="track in tracks"></div> -->
  </div>
</template>

<script>
  import { mapActions, mapState, mapGetters } from 'vuex';

  export default {
    name: 'YourLibrary',
    props: {},
    methods: {
      ...mapActions(['getUserLibraryTracks'])
    },
    computed: {
      ...mapGetters([]),
      ...mapState({
        userLibraryTracks: state => state.spotify.userLibraryTracks
      })
    },
    created() {
      this.getUserLibraryTracks();
    },
    data: () => {
      return {};
    }
  };
</script>

<style></style>
