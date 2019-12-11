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
  async login({ commit }) {
    return await axios.get("https://auth-spotify-api.herokuapp.com/login").then(
      res => console.log(res),
      err => console.log(err)
    );
  },
  setToken() {
    let tokenSliceStart = window.location.hash.slice(14);
    let tokenSliceEnd = tokenSliceStart.slice(0, 178);
    let access_token = tokenSliceEnd;

    localStorage.setItem("access_token", access_token);
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
