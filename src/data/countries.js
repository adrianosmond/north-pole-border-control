import { getRandom } from 'utils/utils';

const countries = [
  'The Republic of Democratus',
  'The Kingdom of Sovreigna',
  'Despotopolis',
  'The Democratic Republic of Dictatoria',
  "The People's Republic of Oppressio",
];

export default () => getRandom(countries);
