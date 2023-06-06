<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import axios from "axios";
import { store } from "./store";
import { Transition } from "vue";
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
        });
    },
    nextJumbo() {
      store.activeIndex++;
      if (store.activeIndex >= store.listJumbo.length) {
        store.activeIndex = 0;
      }
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
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming", {
        params: {
          api_key: "251bc3d26f592e293c210d99c057199e",
        },
      })
      .then(
        (response) => (this.store.listJumbo = response.data.results.slice(0, 5))
      );
  },
  mounted() {
    setInterval(this.nextJumbo, 4000);
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
