import axios from 'axios';

axios.defaults.baseURL = 'https://api.spotify.com/v1';

const state = {
  user: null,
  userLoggedIn: localStorage.getItem('userIsLogginIn'),
  userLibraryTracks: null,
  categories: null,
  userRedirectedFromSpotify: false,
  userPlaylists: [],
  userAlbums: [],
  userFollowedArtists: []
};

const getters = {
  user: state => state.user,
  userName: state => state.user.display_name
};

const actions = {
  login() {
    localStorage.setItem('userIsLogginIn', true);
    window.location.href = 'https://auth-spotify-api.herokuapp.com/login';
  },
  setTokens() {
    const access_token_Start = window.location.href.indexOf('=');
    const access_token_End = window.location.href.indexOf('&');
    const access_token = window.location.href.slice(
      access_token_Start + 1,
      access_token_End
    );

    const refresh_token_Start = window.location.href.indexOf(
      '=',
      access_token_Start + 1
    );
    const refresh_token = window.location.href.slice(refresh_token_Start + 1);

    const tokens = {
      access_token,
      refresh_token
    };

    localStorage.setItem('tokens', JSON.stringify(tokens));
    localStorage.setItem('isTokenSet', true);
  },
  async getRefreshToken() {
    const { refresh_token } = JSON.parse(localStorage.getItem('tokens'));

    if (refresh_token) {
      const token = await axios.get(
        `https://auth-spotify-api.herokuapp.com/refresh_token?refresh_token=${refresh_token}`
      );

      // console.log('REFRESHED ACCESS TOKEN -->', token.data.access_token);

      const newTokens = {
        refresh_token,
        access_toke: token.data.access_token
      };

      localStorage.setItem('tokens', JSON.stringify(newTokens));
    }
  },
  async getAuthUser({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem('tokens'));

    if (access_token) {
      const user = await axios.get(`${axios.defaults.baseURL}/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      });

      commit('setAuthUser', user.data);

      console.log('USER -->', state.user);
    }
  },
  async getUserLibraryTracks({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem('tokens'));

    if (access_token) {
      const tracks = await axios.get(
        `${axios.defaults.baseURL}/me/tracks?limit=10`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
          }
        }
      );

      commit('setUserLibraryTracks', tracks.data.items);
    }
  },
  async getAllCategories({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem('tokens'));

    if (access_token) {
      const categories = await axios.get(
        `${axios.defaults.baseURL}/browse/categories`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
          }
        }
      );

      commit('setCategories', categories.data.categories.items);
      console.log('CATEGORIES state', state.categories);
    }
  },
  setSpotifyRedirect({ commit }) {
    commit('setUserRedirectedFromSpotify', true);
  },
  async getUserPlaylists({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem('tokens'));

    if (access_token) {
      const playlists = await axios.get(
        `${axios.defaults.baseURL}/me/playlists`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
          }
        }
      );
      commit('setUserPlaylists', playlists.data.items);
    }
  },
  async getUserAlbums({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem('tokens'));

    if (access_token) {
      const ablums = await axios.get(`${axios.defaults.baseURL}/me/albums`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      });
      commit('setUserAlbums', ablums.data.items);
    }
  },
  async getUserFollowedArtists({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem('tokens'));

    if (access_token) {
      const followedArtists = await axios.get(
        `${axios.defaults.baseURL}/me/following?type=artist`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
          }
        }
      );

      console.log(followedArtists.data.artists.items);
      commit('setUserFollowedArtists', followedArtists.data.artists.items);
    }
  }
};

const mutations = {
  setAuthUser: (state, user) => (state.user = user),
  setUserLoggedIn_m: (state, value) => (state.userLoggedIn = value),
  setUserLibraryTracks: (state, tracks) => (state.userLibraryTracks = tracks),
  setCategories: (state, categories) => (state.categories = categories),
  setUserRedirectedFromSpotify: (state, value) =>
    (state.userRedirectedFromSpotify = value),
  setUserPlaylists: (state, playlists) => (state.userPlaylists = playlists),
  setUserAlbums: (state, albums) => (state.userAlbums = albums),
  setUserFollowedArtists: (state, followedArtists) =>
    (state.userFollowedArtists = followedArtists)
};

export default {
  state,
  getters,
  actions,
  mutations
};
