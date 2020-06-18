import axios from "axios";

export default class Cocktails {
  constructor() {
    axios.defaults.baseURL = "//www.thecocktaildb.com/api/json/v1/1";
  }

  async getCocktail(params) {
    try {
      const result = await axios
        .get("/search.php", {params});
      return result;
    }
    catch (error) {
      return error.response.status;
    }
  }

  async getCocktailById(params) {
    try {
      const result = await axios
        .get("/lookup.php", {params});
      return result;
    }
    catch (error) {
      return error.response.status;
    }
  }

  async getCategories() {
    try {
      const response = await axios
        .get("/list.php", {
          params: {
            c: "list",
          },
        });
      return response;
    }
    catch (error) {
      return error.response.status;
    }
  }

  async getGlasses() {
    try {
      const response = await axios
        .get("/list.php", {
          params: {
            g: "list",
          },
        });
      return response;
    }
    catch (error) {
      return error.response.status;
    }
  }
}
