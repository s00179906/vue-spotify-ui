<template>
  <div>
    <v-row class="mx-5">
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

<style></style>
