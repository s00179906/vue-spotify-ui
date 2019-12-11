import axios from "axios";

const state = {};

const getters = {};

const actions = {
  async Query(query) {
    const url = `https://api.spotify.com/v1/${query}`;

    const access_token = localStorage.getItem("spotify-token");

    return await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      }
    });
  },
  setToken() {
    // @ Lenght of access_token is 178
    const access_token = window.location.hash.slice(14, 192);

    // @ Lenght of refresh_token is 131
    const refresh_token = window.location.href.slice(-131);

    // @ Tokens Object
    const tokens = {
      access_token: access_token,
      refresh_token: refresh_token
    };

    localStorage.setItem("tokens", JSON.stringify(tokens));
  },
  async getUser({ commit }) {
    const user = await this.Query("me");

    console.log("User feteched from api-->", user);

    return user;
  }
};

const muatations = {};

export default {
  state,
  getters,
  actions,
  muatations
};
