<script>
import LangFlag from "vue-lang-code-flags";
export default {
  props: {
    movieData: Object,
  },
  computed: {
    convertedVote() {
      // Calcola il voto da 1 a 5
      return Math.ceil((this.movieData.vote_average / 10) * 5);
    },
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
    <div
      class="original-title"
      v-show="movieData.title !== movieData.original_title"
    >
      TITOLO ORIGINALE: {{ movieData.original_title }}
    </div>
    <div class="language">
      LINGUA: <lang-flag :iso="movieData.original_language" />
    </div>
    <!-- <div class="vote" v-for="star in movieData.vote_average">
      VOTO: {{ convertVote(movieData.vote_average) }}
    </div> -->
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

<style lang="scss" scoped>
.movie {
  border: 1px solid black;
  padding: 0.5rem;
}

i {
  color: orange;
}
</style>
