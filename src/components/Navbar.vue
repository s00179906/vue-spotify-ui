<template>
  <div class="navbar">
    <div class="navbar-items">
      <div class="spotify-logo">
        <img src="@/assets/Spotify_logo.svg" />
      </div>

      <div class="navbar-links">
        <ul>
          <li>
            <svg width="5" height="30">
              <rect width="300" height="100" style="fill:#1ed760;" />
            </svg>
            <button>
              <img src="@/assets/Spotify_home.svg" />
              Home
            </button>
          </li>
          <li>
            <svg width="5" height="30">
              <rect width="300" height="100" style="fill:#1ed760;" />
            </svg>

            <button>
              <img src="@/assets/Spotify_search.svg" />
              Search
            </button>
          </li>
          <li>
            <svg width="5" height="30">
              <rect width="300" height="100" style="fill:#1ed760;" />
            </svg>
            <button>
              <img src="@/assets/Spotify_yourlibrary.svg" />
              Your Library
            </button>
          </li>
        </ul>
      </div>

      <div class="playlists">
        <div class="create-playlist">
          <h3>PLAYLISTS</h3>
          <button class="btn-create-playlist">
            <img src="@/assets/Spotify_createplaylist.png" />
            Create Playlist
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  button {
    color: #fff;
  }
  .navbar {
    background-color: #040404;
    height: 88%;
    width: 15%;

    .navbar-items {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      .navbar-links {
        display: flex;
        align-content: center;
        justify-content: space-between;
        width: inherit;

        ul {
          padding: 0;
          width: inherit;

          li {
            display: flex;
            margin-top: 5%;
            flex-direction: row;
          }
        }
      }
      .navbar-links button {
        display: inline-flex;
        align-items: center;
        width: 100%;
        margin-left: 6%;

        img {
          margin-right: 5%;
        }

        img:not(:last-child) {
          width: 50%;
        }
      }
      .create-playlist button {
        display: inline-flex;
        align-items: center;
        img {
          width: 15%;
        }
      }
    }

    .playlists {
      margin-top: 15%;
      margin-left: 5%;

      display: inline-flex;
      align-items: center;
      width: 100%;
      margin-left: 6%;

      img {
        margin-right: 5%;
      }

      .create-playlist h3 {
        margin-bottom: 10%;
        letter-spacing: 2px;
        font-weight: lighter;
        font-size: 0.7em;
      }
    }
  }
  .spotify-logo {
    padding: 10% 0% 5% 10%;
    img {
      width: 60%;
    }
  }
</style>
