<script>
export default {
  props: {
    movieData: Object,
  },
};
</script>

<template>
  <div class="movie">
    <div class="img-container">
      <img
        v-if="movieData.poster_path"
        :src="`https://image.tmdb.org/t/p/w342${movieData.poster_path}`"
        :alt="movieData.poster_path"
      />
      <img v-else src="../assets/img/fallback-image.png" alt="Fallback Image" />
    </div>
    <div class="title">TITOLO: {{ movieData.title }}</div>
    <div class="original-title">
      TITOLO ORIGINALE: {{ movieData.original_title }}
    </div>
    <div class="language">LINGUA: {{ movieData.original_language }}</div>
    <div class="vote">VOTO: {{ movieData.vote_average }}</div>
  </div>
</template>

<style lang="scss" scoped>
.movie {
  border: 1px solid black;
  padding: 0.5rem;
}
</style>
