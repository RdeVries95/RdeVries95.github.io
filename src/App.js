// Architectural imports
import React, {useState} from 'react';

// Tools/configurations
import { PATHNAMES } from "./config/pathnames"
import UserContext from "./config/user-context"
import PrivateRoute from "./components/functional/private-route"
import { getName } from "./tools/session-info"
import FadeTransitionRouter from "./components/functional/fade-transition-router"

// Pages
import IntroPage from './pages/intro/intro-view'
import MoviePage from './pages/movie/movie-view'
import LotrPage from './pages/lotr/lotr-view'
import SandboxPage from './pages/sandbox/sandbox-view'
import MemePage from './pages/meme/meme-view'
import StartPage from './pages/start/start-view'

function App() {
  const [user, setUser] = useState(getName())

  return (
    <UserContext.Provider value={user}>
      <FadeTransitionRouter>
          <IntroPage path={PATHNAMES.INTRO} setUser={setUser}/>
          <PrivateRoute component={StartPage} path={PATHNAMES.START} />
          <PrivateRoute component={MoviePage} path={PATHNAMES.MOVIE} />
          <PrivateRoute component={LotrPage} path={PATHNAMES.LOTR} />
          <PrivateRoute component={SandboxPage} path={PATHNAMES.SANDBOX} />
          <PrivateRoute component={MemePage} path={PATHNAMES.MEME} />
      </FadeTransitionRouter>
    </UserContext.Provider>
  );
}

export default App;