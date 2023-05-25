<script>
export default {
  props: {
    seriesData: Object,
  },
};
</script>

<template>
  <div class="serie">
    <div class="img-container">
      <img
        v-if="seriesData.poster_path"
        :src="`https://image.tmdb.org/t/p/w342${seriesData.poster_path}`"
        :alt="seriesData.poster_path"
      />
      <img v-else src="../assets/img/fallback-image.png" alt="Fallback Image" />
    </div>
    <div class="title">TITOLO: {{ seriesData.name }}</div>
    <div class="original-title">
      TITOLO ORIGINALE: {{ seriesData.original_name }}
    </div>
    <div class="language">LINGUA: {{ seriesData.original_language }}</div>
    <div class="vote">VOTO: {{ seriesData.vote_average }}</div>
  </div>
</template>

<style scoped>
.serie {
  background-color: brown;
  border: 1px solid black;
  padding: 0.5rem;
}
</style>
