<template>
  <div>
    <LibraryNavbar />
    <v-app id="playlists" dark>
      <v-row dense class="mt-5 mx-8">
        <v-col
          class="ma-0 pa-0"
          v-for="(playlist, index) in userPlaylists"
          :key="index"
          cols="3"
        >
          <v-card
            class="ma-0 pa-0"
            width="200"
            height="280"
            dark
            color="primaryGray"
          >
            <v-img
              :src="playlist.images[0].url"
              height="160"
              width="200"
              id="img"
            ></v-img>

            <v-card-subtitle
              class="py-2 px-4 text-center font-weight-bold"
              id="playlist-name"
              >{{ playlist.name }}</v-card-subtitle
            >
            <v-card-text class="px-5" id="playlist-owner-text"
              >By {{ playlist.owner.display_name }}</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-app>
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
  background-color: #121212;
  height: 100%;
}

#playlist-name {
  font-size: 16px;
}

#playlist-owner-text {
  font-size: 12px;
  font-weight: lighter;
}
</style>
