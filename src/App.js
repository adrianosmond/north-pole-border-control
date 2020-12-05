import { useCallback, useEffect, useState } from 'react';
import Game from './Game';
import Welcome from './Welcome';

const App = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const startGame = useCallback((event) => {
    if (event.keyCode === 32) {
      setHasStarted(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', startGame);
    return () => document.removeEventListener('keyup', startGame);
  }, [startGame]);

  return hasStarted ? <Game /> : <Welcome />;
};

export default App;
