<script>
import { store } from "../store";
import AppMovie from "../components/AppMovie.vue";
import { objectToString } from "@vue/shared";
import AppSerie from "./AppSerie.vue";
import axios from "axios";

export default {
  components: { AppMovie, AppSerie },
  data() {
    return {
      store,
    };
  },
  updated() {
    for (let i = 0; i < store.listMovies.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${store.listMovies[i].id}/credits`
        )
        .then((response) => (this.store.listMovieId = response.data.cast));
    }
    console.log(store.listMovieId);
  },
};
</script>

<template>
  <main>
    <h2>FILM</h2>
    <div class="movies">
      <AppMovie
        v-for="movie in store.listMovies"
        :key="movie.id"
        :movieData="movie"
      />
    </div>

    <h2>SERIE TV</h2>
    <div class="series">
      <AppSerie
        v-for="serie in store.listSeries"
        :key="serie.id"
        :seriesData="serie"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  // max-width: 1600px;
  background-color: black;
  margin: auto;
  padding: 1rem;
  h2 {
    margin-left: 33px;
    color: white;
  }

  .movies,
  .series {
    display: flex;
    // flex-wrap: wrap;
    gap: 1rem;
    overflow-x: scroll;
    padding: 2rem;
    margin-bottom: 2rem;
    &::-webkit-scrollbar {
      background: black;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgb(112, 1, 1);
    }
  }
}
</style>
