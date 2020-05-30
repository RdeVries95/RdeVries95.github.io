import axios from "axios";

export default class OMDB {
  constructor() {
    axios.defaults.baseURL = "http://www.omdbapi.com/";
  }

  searchMovie(search) {
    return axios
      .get("", {
        params: {
          apikey: "540dbdd3",
          s: search,
          type: "movie",
        },
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getMovie(id) {
    return axios
      .get("", {
        params: {
          apikey: "540dbdd3",
          i: id,
          type: "movie",
          plot: "full",
        },
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
