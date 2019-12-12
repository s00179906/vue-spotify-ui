import axios from "axios";

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
  setToken() {
    const access_token = window.location.hash.slice(14, 300);
    const refresh_token = window.location.href.slice(-131);

    const tokens = {
      access_token: access_token,
      refresh_token: refresh_token
    };

    localStorage.setItem("tokens", JSON.stringify(tokens));
  },
  async getUser({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem("tokens"));

    const user = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      }
    });

    commit("setUser", user.data);
    commit("setUserLoggedIn", true);
    console.log(state.user);
  },
  async getUserLibraryTracks({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem("tokens"));

    const tracks = await axios.get(
      "https://api.spotify.com/v1/me/tracks?limit=50",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`
        }
      }
    );

    commit("setUserLibraryTracks", tracks.items);
    console.log(state.userLibraryTracks);
  }
};

const mutations = {
  setUser: (state, user) => (state.user = user),
  setUserLoggedIn: (state, value) => (state.userLoggedIn = value),
  setUserLibraryTracks: (state, tracks) => (state.userLibraryTracks = tracks)
};

export default {
  state,
  getters,
  actions,
  mutations
};
