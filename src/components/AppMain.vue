<script>
import { store } from "../store";
import AppMovie from "../components/AppMovie.vue";
import { objectToString } from "@vue/shared";
import AppSerie from "./AppSerie.vue";

export default {
  components: { AppMovie, AppSerie },
  data() {
    return {
      store,
    };
  },
  methods: {
    getUrlImage(img) {
      return new URL(`//image.tmdb.org/t/p/w342${img}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="container">
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
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1600px;
  margin: auto;
  padding: 1rem;

  .movies,
  .series {
    display: flex;
    // flex-wrap: wrap;
    gap: 1rem;
    overflow-x: scroll;
    padding: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
