<script>
import LangFlag from "vue-lang-code-flags";
import axios from "axios";
export default {
  data() {
    return {
      listSeriesCast: [],
    };
  },
  props: {
    seriesData: Object,
  },
  computed: {
    convertedVote() {
      // Calcola il voto da 1 a 5
      return Math.ceil((this.seriesData.vote_average / 10) * 5);
    },
  },
  components: {
    LangFlag,
  },
  methods: {
    getSerieCast(idSerie) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${idSerie}/credits`, {
          params: {
            api_key: "251bc3d26f592e293c210d99c057199e",
          },
        })
        .then((response) => {
          const tempSerie = response.data.cast.slice(0, 5);

          this.listSeriesCast = tempSerie;
        });
    },
  },
};
</script>

<template>
  <div class="serie standard">
    <div class="img-container">
      <img
        v-if="seriesData.poster_path"
        :src="`https://image.tmdb.org/t/p/w342${seriesData.poster_path}`"
        :alt="seriesData.poster_path"
      />
      <img v-else src="../assets/img/fallback-image.png" alt="Fallback Image" />
    </div>
    <div class="card-info">
      <div class="title">TITOLO: {{ seriesData.name }}</div>
      <div
        class="original-title"
        v-show="seriesData.title !== seriesData.original_title"
      >
        TITOLO ORIGINALE: {{ seriesData.original_name }}
      </div>
      <div class="language">
        LINGUA: <lang-flag :iso="seriesData.original_language" />
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
      <div class="overview">TRAMA: {{ seriesData.overview }}</div>
      <button @click="this.getSerieCast(seriesData.id)">CAST</button>

      <ul style="list-style: none" class="cast">
        <li v-for="cast in listSeriesCast">
          {{ cast.name }} IN
          <span style="color: rgba(255, 0, 0, 0.5)">{{ cast.character }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.serie {
  border: 1px solid rgba(255, 0, 0, 0.5);
  position: relative;
  cursor: pointer;
  &:hover img {
    opacity: 0.6;
    filter: grayscale(0.8);
    transition: 1s;
  }
  &:hover .card-info {
    display: block;
    transition: 2s;
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
  .title,
  .original-title,
  .language,
  .overview,
  .cast {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
}
.card-info::-webkit-scrollbar {
  background: white;
  width: 5px;
  height: 8px;
}

.serie.unselectedByGenre {
  display: none;
}
</style>
