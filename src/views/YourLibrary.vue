<template>
  <div id="lib">
    <div v-for="track in userLibraryTracks" :key="track.track.id">
      <div v-if="track">
        <Track :track="track" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import Track from '@/components/Track.vue';

export default {
  name: 'YourLibrary',
  components: {
    Track
  },
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

<style lang="scss" scoped>
#lib {
  height: 100%;
  background-attachment: fixed;
  background: rgb(18, 18, 18);
  background: linear-gradient(
    0deg,
    rgba(18, 18, 18, 1) 61%,
    rgba(46, 41, 78, 1) 100%
  );
}
</style>
