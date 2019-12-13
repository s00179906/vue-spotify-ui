<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="4">asd </v-col>

      <v-col sm="8"
        ><v-list dark color="rgba(255,0,0,0)">
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon dark>mdi-music-note</v-icon>
              </v-list-item-icon>

              <v-list-item-title>
                <v-row no-gutters class="ml-1">
                  <v-list-item-title>
                    <p>{{ track.track.name }}</p>
                  </v-list-item-title>
                </v-row>

                <v-row no-gutters class="ml-1">
                  <v-col>
                    <v-list-item-title
                      v-for="(artist, index) in track.track.artists"
                      :key="index"
                    >
                      <p>{{ artist.name }}</p>
                    </v-list-item-title>
                  </v-col>

                  <v-spacer></v-spacer>

                  <v-col>
                    <p>{{ convertToMinutes() }}</p>
                  </v-col>
                </v-row>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    track: null
  },
  data: () => {
    return {
      trackMinutes: 0
    };
  },
  methods: {
    convertToMinutes() {
      return (this.trackMinutes = this.track.track.duration_ms / 60000);
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped></style>
