<template>
  <div id="podcasts">
    <LibraryNavbar />
    <h1>Podcasts Component</h1>
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
#podcasts {
  height: 100%;
  background: var(--v-teritaryDark-base);
}
</style>
