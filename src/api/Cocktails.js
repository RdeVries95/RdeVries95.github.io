import axios from "axios";

export default class Cocktails {
  constructor() {
    axios.defaults.baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";
  }

  getCocktail(params) {
    return axios
      .get(params)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
}
