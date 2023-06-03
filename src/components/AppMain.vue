<script>
import { store } from "../store";
import AppMovie from "../components/AppMovie.vue";
import { objectToString } from "@vue/shared";
import AppSerie from "./AppSerie.vue";
import axios from "axios";

export default {
  components: { AppMovie, AppSerie },
  data() {
    return {
      store,
    };
  },
  methods: {
    getGenresMovies() {
      axios
        .get("https://api.themoviedb.org/3/genre/movie/list", {
          params: {
            api_key: "251bc3d26f592e293c210d99c057199e",
          },
        })
        .then((response) => {
          this.store.moviesGenres = response.data.genres;
        });
    },
    getGenresSeries() {
      axios
        .get("https://api.themoviedb.org/3/genre/tv/list", {
          params: {
            api_key: "251bc3d26f592e293c210d99c057199e",
          },
        })
        .then((response) => {
          this.store.seriesGenres = response.data.genres;
        });
    },
    // showSelectedMoviesGenre() {
    //   const movies = document.querySelectorAll(".movie");
    //   const result = document.querySelector(".not-found");

    //   for (let i = 0; i < store.listMovies.length; i++) {
    //     const movie = movies[i];

    //     if (store.selectedGenre == "") {
    //       result.classList.remove("visible");
    //       movie.classList.remove("unselectedByGenre");
    //       movie.classList.remove("selectedByGenre");
    //       movie.classList.add("standard");
    //     } else if (
    //       store.listMovies[i].genre_ids.includes(store.selectedGenre)
    //     ) {
    //       result.classList.remove("visible");
    //       movie.classList.add("selectedByGenre");
    //       movie.classList.remove("unselectedByGenre");
    //     } else {
    //       result.classList.add("visible");
    //       movie.classList.remove("selectedByGenre");
    //       movie.classList.add("unselectedByGenre");
    //     }
    //   }
    // },
    // showSelectedSeriesGenre() {
    //   const series = document.querySelectorAll(".serie");
    //   const results = document.querySelector(".not-founds");

    //   for (let i = 0; i < store.listSeries.length; i++) {
    //     const serie = series[i];

    //     if (store.selectedGenre == "") {
    //       results.classList.remove("visible");
    //       serie.classList.remove("unselectedByGenre");
    //       serie.classList.remove("selectedByGenre");
    //       serie.classList.add("standard");
    //     } else if (
    //       store.listSeries[i].genre_ids.includes(store.selectedGenre)
    //     ) {
    //       results.classList.remove("visible");
    //       serie.classList.add("selectedByGenre");
    //       serie.classList.remove("unselectedByGenre");
    //     } else {
    //       results.classList.add("visible");
    //       serie.classList.remove("selectedByGenre");
    //       serie.classList.add("unselectedByGenre");
    //     }
    //   }
    // },
  },
  created() {
    this.getGenresMovies();
    this.getGenresSeries();
  },
  computed: {
    filterMovies() {
      return store.selectedGenreMovies
        ? store.listMovies.filter((movie) => {
            return movie.genre_ids.includes(store.selectedGenreMovies);
          })
        : store.listMovies;
    },
    filterSeries() {
      return store.selectedGenreSeries
        ? store.listSeries.filter((serie) => {
            return serie.genre_ids.includes(store.selectedGenreSeries);
          })
        : store.listSeries;
    },
  },
};
</script>

<template>
  <main>
    <h2>FILM</h2>
    <!-- @change="this.showSelectedMoviesGenre()" -->
    <select v-model="store.selectedGenreMovies">
      <option value="">Seleziona un genere</option>
      <option
        v-for="genre in store.moviesGenres"
        :key="genre.id"
        :value="genre.id"
      >
        {{ genre.name }}
      </option>
    </select>
    <div class="movies">
      <div :class="{ visible: filterMovies.length === 0 }" class="not-found">
        Non ci sono risultati disponibili per la ricerca
      </div>
      <AppMovie
        v-for="(movie, i) in filterMovies"
        :key="movie.id"
        :movieData="movie"
      />
    </div>

    <h2>SERIE TV</h2>
    <!-- @change="this.showSelectedSeriesGenre()" -->
    <select v-model="store.selectedGenreSeries">
      <option value="">Seleziona un genere</option>
      <option
        v-for="genre in store.seriesGenres"
        :key="genre.id"
        :value="genre.id"
      >
        {{ genre.name }}
      </option>
    </select>
    <div class="series">
      <div :class="{ visible: filterSeries.length === 0 }" class="not-founds">
        Non ci sono risultati disponibili per la ricerca
      </div>
      <AppSerie
        v-for="serie in filterSeries"
        :key="serie.id"
        :seriesData="serie"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  // max-width: 1600px;
  background-color: black;
  margin: auto;
  padding: 1rem;
  h2 {
    margin-left: 33px;
    color: white;
  }

  .movies,
  .series {
    display: flex;
    // flex-wrap: wrap;
    gap: 1rem;
    overflow-x: scroll;
    padding: 2rem;
    margin-bottom: 2rem;
    &::-webkit-scrollbar {
      background: black;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgb(112, 1, 1);
    }
    .not-found {
      color: red;
      display: none;
      text-align: center;
      font-size: 1.5em;
    }
    .not-found.visible {
      display: block;
    }
    .not-founds {
      color: red;
      display: none;
      text-align: center;
      font-size: 1.5em;
    }
    .not-founds.visible {
      display: block;
    }
  }
  select {
    margin-left: 29px;
    margin-top: 5px;
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
    padding: 0.5rem;
    border-radius: 10px;
    border: 0;
  }
}
</style>
