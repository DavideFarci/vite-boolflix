<script>
import { store } from "../store";
import AppCard from "../assets/img/AppCard.vue";
import { objectToString } from "@vue/shared";

export default {
  components: { AppCard },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="movies">
    <AppCard
      v-for="movie in store.listMovies"
      :key="movie.id"
      :movieData="movie"
    />
  </div>
  <div class="series"></div>
</template>

<style lang="scss" scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}
</style>
