<template>
  <v-dialog
    elevation="0"
    v-model="dialog"
    max-width="100%"
    overlay-opacity="0.9"
    overlay-color="black"
    dark
  >
    <template v-slot:activator="{ on }" dark>
      <v-list-item v-on="on" dark>
        <v-list-item-icon>
          <v-icon dark>mdi-plus-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Create Playlist
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-card style="background-color:rgba(0,0,0,0.0)" :elevation="0" flat>
      <v-card-title class="display-2 justify-center">
        Create new playlist</v-card-title
      >
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Playlist Name"
              height="50px"
              solo
              class="pa-5"
              required
              flat
              style="font-size:300px"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn rounded class="px-10" outlined large @click="dialog = false"
          >Cancel</v-btn
        >
        <v-btn
          rounded
          color="success"
          class="px-10"
          large
          @click="dialog = false"
          >Create</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>
<style lang="scss">
.v-dialog--active {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}
</style>
