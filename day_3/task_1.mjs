import readFile from '../inputReader.mjs';

const filepath = 'day_3/input';

const string = readFile(filepath);

const lowerCoef = 96;
const upperCoef = 38;

const solution = (input) => {
  const elements = input
    .split('\n')
    .map((element) => {
      const firstChunk = element.substring(0, element.length / 2);
      const secondChanc = element.substring(element.length / 2);
      const num = firstChunk
        .split('')
        .filter((char) => secondChanc.includes(char))
        .slice(0,1)
        .reduce((acc, char) => {
          if (char === char.toUpperCase()) {
            acc += char.charCodeAt(0) - upperCoef;
          } else {
            acc += char.charCodeAt(0) - lowerCoef;
          }
          return acc;
        }, 0)

      return num;
    });

  return elements.reduce((acc, sum) => acc + sum, 0);
};

console.log(solution(string))
