<template>
  <div class="navbar">
    <v-card class="mx-auto" color="black" tile height="100%">
      <v-list shaped color="black">
        <v-subheader
          ><div class="spotify-logo mt-2">
            <v-img src="@/assets/Spotify_logo.svg" width="140" />
          </div>
        </v-subheader>
        <v-list-item-group class="mt-5">
          <v-list-item dark>
            <v-list-item-icon>
              <img src="@/assets/Spotify_home.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              Home
            </v-list-item-content>
          </v-list-item>

          <v-list-item dark>
            <v-list-item-icon>
              <img src="@/assets/Spotify_search.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              Search
            </v-list-item-content>
          </v-list-item>

          <v-list-item dark>
            <v-list-item-icon>
              <img src="@/assets/Spotify_yourlibrary.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              Your Library
            </v-list-item-content>
          </v-list-item>

          <v-subheader>
            <p class="text-uppercase">Playlists</p>
          </v-subheader>
          <v-list-item dark>
            <v-list-item-icon>
              <v-icon dark>mdi-plus-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              Create Playlist
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  .navbar {
    height: 88%;
    width: 15%;
  }
</style>
