// Architectural imports
import React, { useState, useEffect, useRef } from "react";

// Styled imports
import { StyledColumn, StyledRow, StyledButton, P } from "./spotify-style";

// Components
import PageHeader from "../../components/constructs/page-header/page-header-view";
import BackButton from "../../components/constructs/back-button/back-button-view";

// Endpoints
import Spotify from "../../api/Spotify";

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=74a89cdf3a8c415d9a6644701e734a91&redirect_uri=${window.location.href}&response_type=token`;

const SpotifyPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [error, setError] = useState("");

  let api = useRef(null);

  const getToken = () => {
    const hash = window.location.hash.substr(1);
    const hashArray = hash.split("&");
    const token = hashArray[0].replace("access_token=", "");
    return token;
  };

  useEffect(() => {
    api.current = new Spotify();
    setAccessToken(getToken());
  });

  return (
    <>
      <PageHeader title="Get your Spotify insights" />
      <BackButton />
      {accessToken ? null : (
        <StyledColumn>
          <StyledButton
            onClick={() => {
              window.location.href = spotifyUrl;
            }}
          >
            Connect to your Spotify
          </StyledButton>
          <P>
            I am not saving any of your personal data. Everything you do here
            will be lost after you close this application.
          </P>
        </StyledColumn>
      )}
    </>
  );
};

export default SpotifyPage;
