import { Link } from 'react-router-dom';

const About = () => (
  <div className="max-w-2xl mx-auto py-8 px-4 leading-relaxed">
    <div className="mb-4">
      <Link to="/">&larr; Back</Link>
    </div>
    <h1 className="text-4xl text-center font-mono">About this game</h1>
    <p className="mt-6">
      This game was built by{' '}
      <a
        href="https://github.com/adrianosmond"
        className="underline text-blue-300"
      >
        Adrian Osmond
      </a>
      . It was based on{' '}
      <a
        href="https://adventofcode.com/2020/day/4"
        className="underline text-blue-300"
      >
        Day 4 of the 2020 Advent of Code puzzle
      </a>
      , which was excellently created by{' '}
      <a
        href="https://twitter.com/ericwastl"
        className="underline text-blue-300"
      >
        Eric Wastl
      </a>
      . The cartoon faces used in the passport photos come from the{' '}
      <a href="https://avataaars.com/" className="underline text-blue-300">
        {' '}
        Avataaars
      </a>{' '}
      library by{' '}
      <a
        href="https://twitter.com/pablostanley"
        className="underline text-blue-300"
      >
        Pablo Stanley
      </a>{' '}
      and use{' '}
      <a
        href="https://twitter.com/pablostanley"
        className="underline text-blue-300"
      >
        Fang-Pen Lin's
      </a>{' '}
      <a
        href="https://github.com/fangpenlin/avataaars"
        className="underline text-blue-300"
      >
        Avataaars React Component
      </a>
      .{' '}
      <a
        href="https://www.vecteezy.com/free-vector/passport-control"
        className="underline text-blue-300"
      >
        Passport Control Vectors by Vecteezy
      </a>
    </p>
  </div>
);

export default About;
