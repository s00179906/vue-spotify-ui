<template>
  <div class="d-none d-sm-flex pt-10 px-5 " id="nav">
    <router-link to="/library/playlists" class="px-1">
      <v-btn text dark>
        <h5 class="text-uppercase ">Playlists</h5>
      </v-btn>
    </router-link>

    <router-link to="/library/made-for-you" class="px-1">
      <v-btn text dark>
        <h5 class="text-uppercase">Made For You</h5>
      </v-btn>
    </router-link>

    <router-link to="/library/liked-songs" class="px-1">
      <v-btn text dark>
        <h5 class="text-uppercase">Liked Songs</h5>
      </v-btn>
    </router-link>

    <router-link to="/library/albums" class="px-1">
      <v-btn text dark>
        <h5 class="text-uppercase">Albums</h5>
      </v-btn>
    </router-link>

    <router-link to="/library/artists" class="px-1">
      <v-btn text dark>
        <h5 class="text-uppercase">Artists</h5>
      </v-btn>
    </router-link>

    <router-link to="/library/podcasts" class="px-1">
      <v-btn text dark>
        <h5 class="text-uppercase">Podcasts</h5>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#nav {
  background-color: #121212;
  font-size: 12px;
  a {
    text-decoration: none;
  }
}
</style>
