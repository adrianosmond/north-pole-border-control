const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.resolve(__dirname, 'people.txt'), 'utf8')
  .split('\n\n')
  .map((p) => p.split(/[\s]/g).map((f) => f.split(':')));

const people = input.map(Object.fromEntries);

const hasRequiredFields = (person) =>
  ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every((requiredField) =>
    Object.keys(person).includes(requiredField),
  );

const isNumberBetween = (str, min, max) => {
  const num = parseInt(str, 10);
  return num >= min && num <= max;
};

const isValidField = ([field, value]) =>
  ({
    byr: (val) => isNumberBetween(val, 1920, 2002),
    iyr: (val) => isNumberBetween(val, 2010, 2020),
    eyr: (val) => isNumberBetween(val, 2020, 2030),
    hgt: (val) =>
      (val.endsWith('cm') && isNumberBetween(val.substr(0, 3), 150, 193)) ||
      (val.endsWith('in') && isNumberBetween(val.substr(0, 2), 59, 76)),
    hcl: (val) => val.match('^#[a-z0-9]{6}$'),
    ecl: (val) =>
      ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val),
    pid: (val) => val.match('^[0-9]{9}$'),
    cid: () => true,
  }[field](value));

const hasValidFields = (person) => Object.entries(person).every(isValidField);

const checkValidity = (person) =>
  hasRequiredFields(person) && hasValidFields(person);

const addValidity = (person) => ({
  ...person,
  isValid: checkValidity(person),
});

fs.writeFileSync(
  path.resolve(__dirname, 'people.js'),
  `export default ${JSON.stringify(people.map(addValidity), null, 2)}`,
);
