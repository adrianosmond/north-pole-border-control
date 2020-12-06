const GameOver = ({ score, startGame }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <h1 className="text-6xl font-mono">Game Over</h1>
      <p className="text-2xl mt-12 text-center">
        You earned
        <br />
        <span className="text-6xl">
          ${score.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </span>
      </p>
      <div>
        <button
          onClick={startGame}
          className="mt-12 bg-blue-700 px-4 py-2 rounded-md"
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default GameOver;
