import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import Game from './Game';
import GameOver from './GameOver';
import Instructions from './Instructions';
import Welcome from './Welcome';

const GAME_STATES = {
  WELCOME: 'WELCOME',
  PLAYING: 'PLAYING',
  DONE: 'DONE',
};

const App = () => {
  const [gameState, setGameState] = useState(GAME_STATES.WELCOME);
  const [score, setScore] = useState(0);

  const startGame = useCallback(() => {
    setScore(0);
    setGameState(GAME_STATES.PLAYING);
  }, []);

  const gameOver = useCallback(() => {
    setGameState(GAME_STATES.DONE);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/instructions">
          <Instructions />
        </Route>
        <Route path="/">
          {gameState === GAME_STATES.WELCOME && (
            <Welcome startGame={startGame} />
          )}
          {gameState === GAME_STATES.PLAYING && (
            <Game score={score} setScore={setScore} gameOver={gameOver} />
          )}
          {gameState === GAME_STATES.DONE && (
            <GameOver score={score} startGame={startGame} />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
