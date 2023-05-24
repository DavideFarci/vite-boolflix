<script>
export default {
  props: {
    movieData: Object,
  },
};
</script>

<template>
  <div class="movie">
    <div class="title">TITOLO: {{ movieData.title }}</div>
    <div class="original-title">
      TITOLO ORIGINALE: {{ movieData.original_title }}
    </div>
    <div class="language">LINGUA: {{ movieData.original_language }}</div>
    <div class="vote">VOTO: {{ movieData.vote_averange }}</div>
  </div>

  <div class="series"></div>
</template>

<style lang="scss" scoped>
.movie {
  border: 1px solid black;
  padding: 0.5rem;
}
</style>
