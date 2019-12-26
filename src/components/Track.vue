<template>
  <v-container class="pa-0">
    <v-row no-gutters>
      <v-col
        ><v-list dark color="rgba(255,0,0,0)" class="pa-0">
          <v-list-item-group color="primary">
            <v-row no-gutters>
              <v-col>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon dark>mdi-music-note</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      v-text="track.track.name"
                    ></v-list-item-title>

                    <v-list-item-subtitle
                      v-for="(artist, index) in track.track.artists"
                      :key="index"
                    >
                      <span v-if="index != 0">,</span>
                      <span>{{ artist.name }}</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-col cols="1" class="pa-0 ma-0">
                    <p style="color:lightgray;">{{ convertToMinutes() }}</p>
                  </v-col>
                </v-list-item>
              </v-col>
            </v-row>
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
      var minutes = Math.floor(this.track.track.duration_ms / 60000);
      var seconds = ((this.track.track.duration_ms % 60000) / 1000).toFixed(0);
      return (this.trackMinutes =
        minutes + ':' + (seconds < 10 ? '0' : '') + seconds);
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped></style>
