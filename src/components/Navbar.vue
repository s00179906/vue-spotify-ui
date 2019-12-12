<template>
  <!-- <v-card class="mx-auto" color="black" tile height="100%">
      <v-list shaped color="black">
        <v-subheader
          ><div class="spotify-logo mt-2">
            <v-img src="@/assets/Spotify_logo.svg" width="25%" />
          </div>
        </v-subheader>
        <v-list-item-group class="mt-5">
          <router-link to="/">
            <v-list-item dark>
              <v-list-item-icon>
                <img src="@/assets/Spotify_home.svg" />
              </v-list-item-icon>
              <v-list-item-content>
                Home
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/search">
            <v-list-item dark>
              <v-list-item-icon>
                <img src="@/assets/Spotify_search.svg" />
              </v-list-item-icon>
              <v-list-item-content>
                Search
              </v-list-item-content>
            </v-list-item></router-link
          >

          <router-link to="/library">
            <v-list-item dark>
              <v-list-item-icon>
                <img src="@/assets/Spotify_yourlibrary.svg" />
              </v-list-item-icon>
              <v-list-item-content>
                Your Library
              </v-list-item-content>
            </v-list-item></router-link
          >

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
    </v-card> -->

  <v-navigation-drawer permanent app color="primaryDark" tile width="220">
    <v-list shaped>
      <v-subheader
        ><div class="spotify-logo mt-2">
          <v-img src="@/assets/Spotify_logo.svg" width="25%" />
        </div>
      </v-subheader>
      <v-list-item-group class="mt-5">
        <router-link to="/">
          <v-list-item dark>
            <v-list-item-icon>
              <img src="@/assets/Spotify_home.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              Home
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/search">
          <v-list-item dark>
            <v-list-item-icon>
              <img src="@/assets/Spotify_search.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              Search
            </v-list-item-content>
          </v-list-item></router-link
        >

        <router-link to="/library">
          <v-list-item dark>
            <v-list-item-icon>
              <img src="@/assets/Spotify_yourlibrary.svg" />
            </v-list-item-icon>
            <v-list-item-content>
              Your Library
            </v-list-item-content>
          </v-list-item></router-link
        >

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

    <!-- <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->
  </v-navigation-drawer>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  * {
    text-decoration: none !important;
    color: white;
  }
</style>
