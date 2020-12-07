import { Link } from 'react-router-dom';

const GameOver = ({ score, startGame }) => (
  <div className="min-h-screen flex flex-col items-center justify-center py-12">
    <h1 className="text-6xl text-center font-mono">Game Over</h1>
    <p className="text-2xl mt-12 text-center">
      You earned
      <br />
      <span className="text-6xl">
        ${score.toLocaleString(undefined, { maximumFractionDigits: 0 })}
      </span>
    </p>
    <button
      onClick={startGame}
      className="mt-12 bg-blue-700 px-4 py-2 rounded-md"
    >
      Play again
    </button>
    <div className="mt-8 flex justify-around">
      <Link to="/instructions" className="text-blue-300 underline">
        How to play
      </Link>
      <Link to="/about" className="text-blue-300 underline">
        About
      </Link>
    </div>
  </div>
);

export default GameOver;
