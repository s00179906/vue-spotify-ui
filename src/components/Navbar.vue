<template>
  <div>
    <v-btn class="d-lg-none" text @click.stop="drawer = !drawer"></v-btn>
    <v-navigation-drawer
      app
      color="primaryDark"
      tile
      :width="230"
      v-model="drawer"
    >
      <v-list>
        <v-subheader
          ><div class="spotify-logo mt-2">
            <v-img src="@/assets/Spotify_logo.svg" width="25%" />
          </div>
        </v-subheader>
        <v-list-item-group class="mt-5">
          <router-link to="/">
            <v-list-item dark>
              <v-list-item-icon class="mx-2">
                <img src="@/assets/Spotify_home.svg" />
              </v-list-item-icon>
              <v-list-item-content>
                Home
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/search">
            <v-list-item dark>
              <v-list-item-icon class="mx-2">
                <img src="@/assets/Spotify_search.svg" />
              </v-list-item-icon>
              <v-list-item-content>
                Search
              </v-list-item-content>
            </v-list-item></router-link
          >

          <router-link to="/library">
            <v-list-item dark class="py-0">
              <v-list-item-icon class="mx-2">
                <img src="@/assets/Spotify_yourlibrary.svg" />
              </v-list-item-icon>
              <v-list-item-content>
                Your Library
              </v-list-item-content>
            </v-list-item></router-link
          >

          <v-list-item-subtitle>
            <p class="text-uppercase px-5 pb-0 mb-2 mt-3">Playlists</p>
          </v-list-item-subtitle>

          <PlaylistModal />
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div>
          <v-btn
            @click="logout"
            v-if="userLoggedIn"
            block
            color="warning"
            class="font-weight-bold"
            >Logout</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import PlaylistModal from '@/components/PlaylistModal.vue';
import { mapState } from 'vuex';

export default {
  components: {
    PlaylistModal
  },
  data: () => ({
    drawer: true,
    group: null,
    dialog: false
  }),
  computed: {
    ...mapState(['userLoggedIn'])
  },

  watch: {
    group() {
      this.drawer = true;
    }
  }
};
</script>

<style scoped lang="scss">
* {
  text-decoration: none !important;
  color: white;
}
</style>
