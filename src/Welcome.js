import { Link } from 'react-router-dom';

const Welcome = ({ startGame }) => (
  <div className="max-w-2xl mx-auto py-8 px-4 leading-relaxed text-center">
    <h1 className="text-4xl font-mono">North Pole: Border Control</h1>{' '}
    <img
      src={`${process.env.PUBLIC_URL}/passport.svg`}
      alt=""
      className="mt-8"
    />
    <button
      onClick={startGame}
      className="mt-12 bg-blue-700 px-4 py-2 rounded-md"
    >
      Start the game
    </button>
    <div className="mt-8 flex justify-around">
      <Link to="/instructions" className="text-blue-300 underline">
        How to play
      </Link>
      <Link to="/about" className="text-blue-300 underline ml-32">
        About
      </Link>
    </div>
  </div>
);

export default Welcome;
