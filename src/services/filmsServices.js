import axios from "axios";

function fetchFilms() {
  return axios.get("https://api.themoviedb.org/3/discover/movie");
}
export default {
  fetchFilms,
};
