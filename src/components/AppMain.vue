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
    convertVote(vote) {
      // Calcola il voto da 1 a 5
      const convertedVote = Math.ceil((vote / 10) * 5);

      return convertedVote;
    },
  },
};
</script>

<template>
  <div class="movies">
    <AppMovie
      v-for="movie in store.listMovies"
      :key="movie.id"
      :movieData="movie"
    />
  </div>

  <div class="series">
    <AppSerie
      v-for="serie in store.listSeries"
      :key="serie.id"
      :seriesData="serie"
    />
  </div>
</template>

<style lang="scss" scoped>
.movies,
.series {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}
</style>
