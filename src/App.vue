<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./store";
export default {
  data() {
    return {
      store,
    };
  },
  components: { AppHeader, AppMain },
  methods: {
    requestMovies() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "251bc3d26f592e293c210d99c057199e",
            query: this.store.searchInput,
          },
        })
        .then((response) => {
          this.store.listMovies = response.data.results;
          this.getListMoviesCasts();
        });

      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "251bc3d26f592e293c210d99c057199e",
            query: this.store.searchInput,
          },
        })
        .then((response) => {
          this.store.listSeries = response.data.results;
          this.getListSeriesCasts();
        });
    },
    getListMoviesCasts() {
      for (let i = 0; i < store.listMovies.length; i++) {
        axios
          .get(
            `https://api.themoviedb.org/3/movie/${store.listMovies[i].id}/credits`,
            {
              params: {
                api_key: "251bc3d26f592e293c210d99c057199e",
              },
            }
          )
          .then((response) => {
            const tempMovies = response.data.cast.slice(0, 5);

            this.store.listMovieCast[store.listMovies[i].id] = tempMovies;
          });
      }
      console.log(store.listMovieCast);
    },
    getListSeriesCasts() {
      for (let i = 0; i < store.listSeries.length; i++) {
        axios
          .get(
            `https://api.themoviedb.org/3/tv/${store.listSeries[i].id}/credits`,
            {
              params: {
                api_key: "251bc3d26f592e293c210d99c057199e",
              },
            }
          )
          .then((response) => {
            const tempSeries = response.data.cast.slice(0, 5);

            this.store.listSeriesCast[store.listSeries[i].id] = tempSeries;
          });
      }
      console.log(store.listSeriesCast);
    },
  },
  created() {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "251bc3d26f592e293c210d99c057199e",
        },
      })
      .then((response) => (this.store.listMovies = response.data.results));
    axios
      .get("https://api.themoviedb.org/3/tv/top_rated", {
        params: {
          api_key: "251bc3d26f592e293c210d99c057199e",
        },
      })
      .then((response) => (this.store.listSeries = response.data.results));
  },
};
</script>

<template>
  <AppHeader @performedSearch="requestMovies" />
  <AppMain />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
