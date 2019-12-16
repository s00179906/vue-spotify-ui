import axios from 'axios';

const state = {
  user: null,
  userLoggedIn: false,
  userLibraryTracks: null
};

const getters = {
  user: state => state.user,
  userName: state => state.user.display_name
};

const actions = {
  setTokens() {
    const tokenExists = JSON.parse(localStorage.getItem('tokens'));

    if (tokenExists) {
      console.log('token already exists');
    } else {
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
    }
  },
  async getAuthUser({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem('tokens'));

    if (access_token) {
      const user = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`
        }
      });
      commit('setAuthUser', user.data);
    }
  },
  async getUserLibraryTracks({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem('tokens'));

    if (access_token) {
      const tracks = await axios.get(
        'https://api.spotify.com/v1/me/tracks?limit=10',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`
          }
        }
      );

      commit('setUserLibraryTracks', tracks.data.items);
    }
  }
};

const mutations = {
  setAuthUser: (state, user) => (state.user = user),
  setUserLoggedIn: (state, value) => (state.userLoggedIn = value),
  setUserLibraryTracks: (state, tracks) => (state.userLibraryTracks = tracks)
};

export default {
  state,
  getters,
  actions,
  mutations
};
