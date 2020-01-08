<template>
  <div id="albums">
    <LibraryNavbar />
    <h1>Albums Component</h1>
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

<style lang="scss" scoped>
#albums {
  height: 100%;
  background: var(--v-teritaryDark-base);
}
</style>
