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
    showSelectedGenre() {
      const movies = document.querySelectorAll(".movie");

      for (let i = 0; i < store.listMovies.length; i++) {
        const movie = movies[i];

        if (store.selectedGenre == "") {
          movie.classList.remove("unselectedByGenre");
          movie.classList.remove("selectedByGenre");
          movie.classList.add("standard");
        } else if (
          store.listMovies[i].genre_ids.includes(store.selectedGenre)
        ) {
          movie.classList.add("selectedByGenre");
          movie.classList.remove("unselectedByGenre");
        } else {
          movie.classList.remove("selectedByGenre");
          movie.classList.add("unselectedByGenre");
        }
      }
    },
  },
  created() {
    this.getGenresMovies();
    console.log(store.moviesGenres);
  },
};
</script>

<template>
  <main>
    <h2>FILM</h2>
    <select v-model="store.selectedGenre" @change="this.showSelectedGenre()">
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
      <AppMovie
        v-for="(movie, i) in store.listMovies"
        :key="movie.id"
        :movieData="movie"
      />
    </div>

    <h2>SERIE TV</h2>
    <div class="series">
      <AppSerie
        v-for="serie in store.listSeries"
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
  }
}
</style>
