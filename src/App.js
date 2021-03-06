// Architectural imports
import React, { useState } from "react";

// Tools/configurations
import { PATHNAMES } from "./config/pathnames";
import UserContext from "./config/user-context";
import PrivateRoute from "./components/functional/private-route";
import FadeTransitionRouter from "./components/functional/fade-transition-router/fade-transition-router-view";

// Pages
import IntroPage from "./pages/intro/intro-view";
import MoviePage from "./pages/movie/movie-view";
import CocktailPage from "./pages/cocktail/cocktail-view";
import AboutPage from "./pages/about/about-view";
import YodaPage from "./pages/yoda/yoda-view";
import HomePage from "./pages/home/home-view";
import RecipePage from "./pages/cocktail/recipe/recipe-view";
// import Page from "./pages/page/page-view";

function App() {
  const [user, setUser] = useState(sessionStorage.getItem("user"));

  return (
    <UserContext.Provider value={user}>
      <FadeTransitionRouter>
        <IntroPage path={PATHNAMES.INTRO} setUser={setUser} />
        <PrivateRoute component={HomePage} path={PATHNAMES.HOME} />
        <PrivateRoute component={MoviePage} path={PATHNAMES.MOVIE} />
        <PrivateRoute component={CocktailPage} path={PATHNAMES.COCKTAIL} />
        <PrivateRoute
          component={RecipePage}
          path={`${PATHNAMES.COCKTAIL}/:cocktailId`}
        />
        <PrivateRoute component={AboutPage} path={PATHNAMES.ABOUT} />
        <PrivateRoute component={YodaPage} path={PATHNAMES.YODA} />
      </FadeTransitionRouter>
    </UserContext.Provider>
  );
}

export default App;
