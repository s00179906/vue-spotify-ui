<template>
  <div id="liked-songs">
    <LibraryNavbar />

    <v-container>
      <v-row>
        <v-col cols="4">
          <!-- //@TODO MAKE IN COMPONENT -->
          <v-col>
            <v-row class="mx-auto">
              <img src="@/assets/playlist-heart.png" width="100%" />
            </v-row>
            <v-row class="mx-auto">
              <v-col>
                <p
                  style="color:#fff; font-size: 26px;"
                  class="font-weight-bold text-center"
                >
                  Liked Songs
                </p>
                <div class="text-center">
                  <v-btn width="130" class="mt-4" rounded color="success"
                    >PLAY</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
        <v-col cols="8"
          ><div v-for="track in userLibraryTracks" :key="track.track.id">
            <div v-if="track">
              <Track :track="track" />
            </div></div
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LibraryNavbar from '@/components/LibraryNavbar.vue';
import Track from '@/components/Track.vue';
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  components: {
    LibraryNavbar,
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
#liked-songs {
  height: 100%;
  background: rgb(18, 18, 18);
  background: linear-gradient(
    0deg,
    rgba(18, 18, 18, 1) 61%,
    rgba(46, 41, 78, 1) 100%
  );
}
</style>
