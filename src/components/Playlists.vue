<template>
  <div id="playlists">
    <LibraryNavbar />
    <v-container dark class="mx-4">
      <v-row dense class="mt-5">
        <v-col
          class="ma-2"
          v-for="(playlist, index) in userPlaylists"
          :key="index"
          cols="2"
        >
          <v-card width="200" height="280" dark color="primaryGray">
            <v-img
              :src="playlist.images[0].url"
              height="160"
              width="200"
              id="img"
            ></v-img>

            <v-card-subtitle
              class="text-center font-weight-bold"
              id="playlist-name"
              >{{ playlist.name }}</v-card-subtitle
            >
            <v-card-text class="text-truncate" id="playlist-owner-text"
              >By {{ playlist.owner.display_name }}</v-card-text
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
    ...mapActions(['getUserPlaylists'])
  },
  computed: {
    ...mapState({
      userPlaylists: state => state.spotify.userPlaylists
    })
  },
  created() {
    this.getUserPlaylists();
  }
};
</script>

<style scoped lang="scss">
#playlists {
  height: 100%;
  background: rgb(18, 18, 18);
  background: linear-gradient(
    0deg,
    rgba(18, 18, 18, 1) 61%,
    rgba(41, 78, 50, 1) 100%
  );
}

#playlist-name {
  font-size: 16px;
}

#playlist-owner-text {
  font-size: 12px;
  font-weight: lighter;
}
</style>
