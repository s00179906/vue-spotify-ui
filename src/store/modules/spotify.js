import axios from "axios";

const state = {
  user: null,
  name: "ibrah"
};

const getters = {
  user: state => state.user
};

const actions = {
  setToken() {
    const access_token = window.location.hash.slice(14, 192);
    const refresh_token = window.location.href.slice(-131);

    const tokens = {
      access_token: access_token,
      refresh_token: refresh_token
    };

    localStorage.setItem("tokens", JSON.stringify(tokens));
  },
  async getUser({ commit }) {
    const { access_token } = await JSON.parse(localStorage.getItem("tokens"));
    const highlight = "background: #444; color: orange";
    const user = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      }
    });

    console.log("b4 commit", state.user);
    commit("setUser", user.data);
    console.log("after commit", state.user);
  }
};

const mutations = {
  setUser: (state, user) => (state.user = user)
};

export default {
  state,
  getters,
  actions,
  mutations
};
