<template>
  <div id="search">
    <h1 class="ml-5 pt-5" dark>Browse all</h1>
    <Categories />
  </div>
</template>

<script>
import Categories from '@/components/Categories.vue';
export default {
  components: {
    Categories
  }
};
</script>

<style scoped>
#search {
  background-color: #121212;
  height: 100%;
}
</style>
