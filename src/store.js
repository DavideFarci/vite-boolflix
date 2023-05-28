import { reactive } from "vue";
export const store = reactive({
  listMovies: [],
  listSeries: [],
  listMovieCast: [],
  listSeriesCast: [],
  searchInput: "",
});
