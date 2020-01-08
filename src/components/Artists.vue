<template>
  <div id="artists">
    <LibraryNavbar />
    <v-container dark class="mx-4">
      <v-row dense class="mt-5">
        <v-col
          class="ma-2"
          v-for="(artist, index) in userFollowedArtists"
          :key="index"
          cols="2"
        >
          <v-card width="200" height="280" dark color="primaryGray">
            <v-img
              :src="artist.images[0].url"
              height="160"
              width="200"
              id="img"
            ></v-img>

            <v-card-subtitle
              class="text-center font-weight-bold"
              id="playlist-name"
              >{{ artist.name }}</v-card-subtitle
            >
            <v-card-text
              class="text-truncate d-inline"
              style="font-size: .8rem"
              id="playlist-owner-text"
            >
              {{ artist.type }}</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LibraryNavbar from '@/components/LibraryNavbar.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    LibraryNavbar
  },
  methods: {
    ...mapActions(['getUserFollowedArtists'])
  },
  computed: {
    ...mapState({
      userFollowedArtists: state => state.spotify.userFollowedArtists
    })
  },
  created() {
    this.getUserFollowedArtists();
  }
};
</script>

<style lang="scss" scoped>
#artists {
  height: 100%;
  background: var(--v-teritaryDark-base);
}
</style>
