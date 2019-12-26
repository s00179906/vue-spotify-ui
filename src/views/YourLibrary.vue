<template>
  <div>
    <LibraryNavbar />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import LibraryNavbar from '@/components/LibraryNavbar.vue';

export default {
  name: 'YourLibrary',
  components: {
    LibraryNavbar
  }
};
</script>

<style lang="scss" scoped></style>
