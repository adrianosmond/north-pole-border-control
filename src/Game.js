import NumberEasing from 'react-number-easing';
import Passport from 'components/Passport';
import getName from 'data/names';
import getCountry from 'data/countries';
import people from 'data/people';
import { useCallback, useEffect, useState } from 'react';
import { getRandom } from 'utils/utils';

const Game = ({ score, setScore, gameOver }) => {
  const [time, setTime] = useState(60);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [person, setPerson] = useState(null);
  const [approved, setApproved] = useState(null);

  const newPerson = useCallback(() => {
    const { isValid: v, ...p } = getRandom(people);
    setApproved(null);
    setName(getName());
    setCountry(getCountry());
    setPerson(p);
    setIsValid(v);
  }, []);

  useEffect(() => {
    setTimeout(() => setTime((t) => Math.max(0, t - 1)), 1000);
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      gameOver();
    }
  }, [gameOver, time]);

  const correct = useCallback(() => {
    setScore((s) => s + 100);
  }, [setScore]);

  const incorrect = useCallback(() => {
    setScore((s) => Math.max(0, s - 500));
  }, [setScore]);

  const approve = useCallback(() => {
    if (approved === null) {
      setApproved(true);
      setTimeout(newPerson, 1000);
      if (isValid) {
        correct();
      } else {
        incorrect();
      }
    }
  }, [approved, correct, incorrect, isValid, newPerson]);

  const deny = useCallback(() => {
    if (approved === null) {
      setApproved(false);
      setTimeout(newPerson, 1000);
      if (isValid) {
        incorrect();
      } else {
        correct();
      }
    }
  }, [approved, correct, incorrect, isValid, newPerson]);

  const handleKeypress = useCallback(
    (event) => {
      switch (event.keyCode) {
        case 65: // A
          approve();
          break;
        case 68: // D
          deny();
          break;
        default:
          break;
      }
    },
    [approve, deny],
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeypress);
    return () => document.removeEventListener('keyup', handleKeypress);
  }, [handleKeypress]);

  useEffect(() => {
    newPerson();
  }, [newPerson]);

  const numberRenderer = useCallback(
    (number) => number.toLocaleString(undefined, { maximumFractionDigits: 0 }),
    [],
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-around py-4">
      <div className="flex justify-between max-w-xl w-full">
        <p>
          Time:
          <br />
          <span className="text-4xl">{time}</span>
        </p>
        <p className="text-right">
          Earned:
          <br />
          <span className="text-4xl">
            $
            <NumberEasing
              value={score}
              ease="quadOut"
              speed={1000}
              customFunctionRender={numberRenderer}
            />
          </span>
        </p>
      </div>
      <Passport name={name} country={country} approved={approved} {...person} />
      <div className="flex justify-around max-w-xl w-full">
        <button
          onClick={approve}
          className="text-6xl p-6 bg-green-500 rounded-full focus:outline-none focus:bg-green-400"
        >
          👍
        </button>
        <button
          onClick={deny}
          className="text-6xl p-6 bg-red-600 rounded-full focus:outline-none focus:bg-red-400"
        >
          👎
        </button>
      </div>
    </div>
  );
};

export default Game;
