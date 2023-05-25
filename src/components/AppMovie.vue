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
    <div class="card-info">
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
      <i
        class="fa-regular fa-star"
        v-for="star in 5"
        :key="star"
        :class="{
          'fa-solid': star <= convertedVote,
          'fa-star': star > convertedVote,
        }"
      ></i>
      <div class="overview">TRAMA: {{ movieData.overview }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie {
  position: relative;
  cursor: pointer;
  &:hover img {
    opacity: 0.5;
    filter: grayscale(0.8);
  }
  &:hover .card-info {
    display: block;
  }
}

i {
  color: orange;
}

.card-info {
  width: 100%;
  height: 100%;
  display: none;
  font-size: 1.1em;
  text-align: center;
  line-height: 30px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  overflow-y: auto;
}
</style>
