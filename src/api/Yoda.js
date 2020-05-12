import axios from "axios";

export default class Yoda {
  constructor() {
    axios.defaults.baseURL =
      "https://api.funtranslations.com/translate/yoda.json/";
  }

  convertToYoda(text) {
    return axios
      .get("", {
        params: {
          text: text,
        },
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return error.response.status;
      });
  }
}
