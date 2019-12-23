import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/User.vue';
import Search from '../views/Search.vue';
import YourLibrary from '../views/YourLibrary.vue';

import Playlists from '@/components/Playlists.vue';
import MadeForYou from '@/components/MadeForYou.vue';
import LikedSongs from '@/components/LikedSongs.vue';
import Artists from '@/components/Artists.vue';
import Albums from '@/components/Albums.vue';
import Podcasts from '@/components/Podcasts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/library',
    name: 'yourlibrary',
    component: YourLibrary
  },
  {
    path: '/library/playlists',
    name: 'playlists',
    component: Playlists
  },
  {
    path: '/library/made-for-you',
    name: 'made for you',
    component: MadeForYou
  },
  {
    path: '/library/liked-songs',
    name: 'liked songs',
    component: LikedSongs
  },
  {
    path: '/library/albums',
    name: 'albums',
    component: Albums
  },
  {
    path: '/library/artists',
    name: 'artists',
    component: Artists
  },
  {
    path: '/library/podcasts',
    name: 'podcasts',
    component: Podcasts
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
