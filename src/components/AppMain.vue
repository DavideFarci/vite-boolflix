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
};
</script>

<template>
  <main>
    <h2>FILM</h2>
    <div class="movies">
      <AppMovie
        v-for="(movie, i) in store.listMovies"
        :key="movie.id"
        :movieData="movie"
        :movieCast="store.listMovieCast[i]"
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
