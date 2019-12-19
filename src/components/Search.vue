<template>
  <v-text-field
    class="ml-5 mt-5"
    placeholder="Search for Artists, Songs or Podcasts"
    prepend-inner-icon="mdi-magnify"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      // setTimeout(() => {
      //   this.items = this.states.filter(e => {
      //     return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1;
      //   });
      //   this.loading = false;
      // }, 500);
    }
  }
};
</script>

<style></style>
