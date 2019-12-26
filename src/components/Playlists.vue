<template>
  <div>
    <LibraryNavbar />
    <v-app id="playlists" dark>
      <h1>Playlists Component</h1>
    </v-app>
  </div>
</template>

<script>
import LibraryNavbar from '@/components/LibraryNavbar.vue';

export default {
  components: {
    LibraryNavbar
  }
};
</script>

<style scoped lang="scss">
#playlists {
  background-color: #121212;
  height: 100%;
}
</style>
