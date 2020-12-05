const countries = [
  'The Republic of Democratia',
  'The Kingdom of Sovreigna',
  'Despotopolis',
  'The Democratic Republic of Dictatoria',
  "The People's Republic of Oppressia",
];

export default () => countries[Math.floor(Math.random() * countries.length)];
