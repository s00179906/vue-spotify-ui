<template>
  <div>
    <!-- Desktop View -->
    <v-row class="mx-5 d-none d-sm-flex">
      <v-col
        class="px-2 py-2"
        v-for="(category, index) in categories"
        :key="index"
      >
        <v-card color="rgba(0,0,0,0)" max-width="200" dark shaped>
          <v-img :src="category.icons[0].url">
            <v-card-title>
              <span class="title font-weight-black pb-5">
                {{ category.name }}
              </span>
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- Mobile View -->

    <v-row class="mx-2 d-md-none d-xs-flex">
      <v-col
        class="ma-0 px-0"
        v-for="(category, index) in categories"
        :key="index"
      >
        <v-card
          style="background-color: #21D4FD;
                   background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);"
          dark
          elevation="0"
          width="170"
          height="100"
          shaped
        >
          <v-img :src="category.icons[0].url" width="170" height="100" id="img">
            <v-card-title>
              <span class="title font-weight-black pb-5">
                {{ category.name }}
              </span>
            </v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['getAllCategories'])
  },
  computed: {
    ...mapState({
      categories: state => state.spotify.categories
    })
  },
  created() {
    this.getAllCategories();
  },
  data: () => {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#img {
  /* transform: rotate(45deg);
  overflow: hidden !important; */
}
</style>
