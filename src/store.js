import { reactive } from "vue";
export const store = reactive({
  listMovies: [],
  listSeries: [],
  moviesGenres: [],
  seriesGenres: [],
  searchInput: "",
  selectedGenre: "",
});
