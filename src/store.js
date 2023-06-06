import { reactive } from "vue";
export const store = reactive({
  listJumbo: [],
  listMovies: [],
  listSeries: [],
  moviesGenres: [],
  seriesGenres: [],
  searchInput: "",
  selectedGenreMovies: "",
  selectedGenreSeries: "",
  activeIndex: 0,
});
