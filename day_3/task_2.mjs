import readFile from '../inputReader.mjs';

const filepath = 'day_3/input';

const string = readFile(filepath);

const lowerCoef = 96;
const upperCoef = 38;

const solution = (input) => {
  const elements = input
    .split('\n');
  const groups = [];
  let group = new Array();
  elements.forEach((el) => {
    if (group.length < 3) {
      group.push(el);
    }
    if (group.length === 3) {
      groups.push(group);
      group = new Array();
    }
  })

  return groups
    .map((group) => {
      const num = group[0]
        .split('')
        .filter((char) => group[1].includes(char) && group[2].includes(char))
        .slice(0, 1)
        .reduce((acc, char) => {
          if (char === char.toUpperCase()) {
            acc += char.charCodeAt(0) - upperCoef;
          } else {
            acc += char.charCodeAt(0) - lowerCoef;
          }
          return acc;
        }, 0)

      return num;
    })
    .reduce((acc, sum) => acc + sum, 0);
};

console.log(solution(string));