<template>
  <!-- <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on }">
      <v-list-item v-on="on" dark>
        <v-list-item-icon>
          <v-icon dark>mdi-plus-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          Create Playlist
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-card color="primary">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="dialog = false">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>User Controls</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Content filtering</v-list-item-title>
            <v-list-item-subtitle
              >Set the content filtering level to restrict apps that can be
              downloaded</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Password</v-list-item-title>
            <v-list-item-subtitle
              >Require password for purchase or use password to restrict
              purchase</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>General</v-subheader>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="notifications"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle
              >Notify me about updates to apps or games that I
              downloaded</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="sound"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sound</v-list-item-title>
            <v-list-item-subtitle
              >Auto-update apps at any time. Data charges may
              apply</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-checkbox v-model="widgets"></v-checkbox>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Auto-add widgets</v-list-item-title>
            <v-list-item-subtitle
              >Automatically add home screen widgets</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog> -->

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
