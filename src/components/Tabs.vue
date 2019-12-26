<template>
  <v-bottom-navigation
    :value="activeBtn"
    dark
    color="blue"
    class="d-flex d-sm-none"
  >
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/search">
      <span>Search</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn to="/yourlibrary/playlists">
      <span>Library</span>
      <v-icon>mdi-library-music</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
