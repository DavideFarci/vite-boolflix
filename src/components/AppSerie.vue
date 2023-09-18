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
      <div class="title">
        <span class="row_name">TITOLO:</span> {{ seriesData.name }}
      </div>
      <div
        class="original-title"
        v-show="seriesData.title !== seriesData.original_title"
      >
        <span class="row_name">TITOLO ORIGINALE:</span>
        {{ seriesData.original_name }}
      </div>
      <div class="language">
        <span class="row_name">LINGUA:</span>
        <lang-flag :iso="seriesData.original_language" />
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
      <div class="overview">
        <span class="row_name">TRAMA:</span> {{ seriesData.overview }}
      </div>
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
.serie.standard {
  border: 1px solid rgba(255, 0, 0, 0.5);
  position: relative;
  cursor: pointer;
  &:hover .card-info {
    height: 100%;
    transition: 0.5s ease-in-out;
    padding-inline: 0.5rem;
  }
}

i {
  color: orange;
}

.card-info {
  width: 100%;
  height: 0%;
  font-size: 0.9em;
  text-align: center;
  line-height: 30px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  .row_name {
    color: red;
    margin-bottom: 0.3rem;
  }
  button {
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
    padding: 0.3rem;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: red;
    }
  }
}

.card-info::-webkit-scrollbar {
  scroll-behavior: smooth;
  background: red;
  width: 5px;
  height: 8px;
}

.serie.unselectedByGenre {
  display: none;
}
</style>
