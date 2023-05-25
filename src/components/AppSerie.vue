<script>
export default {
  props: {
    seriesData: Object,
  },
  computed: {
    convertedVote() {
      // Calcola il voto da 1 a 5
      return Math.ceil((this.seriesData.vote_average / 10) * 5);
    },
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
    <i
      class="fa-regular fa-star"
      v-for="star in 5"
      :key="star"
      :class="{
        'fa-solid': star <= convertedVote,
        'fa-star': star > convertedVote,
      }"
    ></i>
  </div>
</template>

<style scoped>
.serie {
  background-color: brown;
  border: 1px solid black;
  padding: 0.5rem;
}

i {
  color: orange;
}
</style>
