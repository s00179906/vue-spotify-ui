<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Spotify</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', 'Montserrat';
    text-decoration: none;
  }
</style>
