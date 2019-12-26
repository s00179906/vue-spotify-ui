<template>
  <v-app id="search" dark>
    <h1 class="text-center">Search</h1>
    <Categories />
  </v-app>
</template>

<script>
import Categories from '@/components/Categories.vue';

export default {
  components: {
    Categories
  },
  data: () => {
    return {};
  }
};
</script>

<style scoped>
#search {
  background-color: #121212;
  height: 100%;
}
</style>
