import axios from "axios";

const clientId = "74a89cdf3a8c415d9a6644701e734a91";

export default class Spotify {
  constructor() {
    axios.defaults.baseURL =
      "https://accounts.spotify.com";
  }

  async authorize() {
    try {
      const result = await axios
        .get("/authorize", {params: {
            client_id: clientId,
            response_type: "token",
            redirect_uri: window.location.href
        }});
      return result;
    }
    catch (error) {
      return error.response.status;
    }
  }
}
