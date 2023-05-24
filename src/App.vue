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
        .then((response) => (this.store.listMovies = response.data.results));
    },
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
