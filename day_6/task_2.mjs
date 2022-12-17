import readFile from '../inputReader.mjs';

const filepath = 'day_6/input.txt';

const string = readFile(filepath);

const solution = (string) => {
  let result;
  for (let i = 13; i < string.length; i += 1) {
    const substr = string.substring(i - 13, i + 1);
    const isUniq = new Set(substr).size === substr.length;
    if (isUniq) {
      result = i + 1;
      break;
    }
  }

  return result;
};

console.log(solution(string));
