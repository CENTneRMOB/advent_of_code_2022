import readFile from '../inputReader.mjs';

const filepath = 'day_5/input.txt';

const string = readFile(filepath);

const start = {
  1: ['D', 'B', 'J', 'V'],
  2: ['P', 'V', 'B', 'W', 'R', 'D', 'F'],
  3: ['R', 'G', 'F', 'L', 'D', 'C', 'W', 'Q'],
  4: ['W', 'J', 'P', 'M', 'L', 'N', 'D', 'B'],
  5: ['H', 'N', 'B', 'P', 'C', 'S', 'Q'],
  6: ['R', 'D', 'B', 'S', 'N', 'G'],
  7: ['Z', 'B', 'P', 'M', 'Q', 'F', 'S', 'H'],
  8: ['W', 'L', 'F'],
  9: ['S', 'V', 'F', 'M', 'R'],
};

const solution = (string) => {
  const commands = string
    .split('\n')
    .map((command) => command.split(' '));

  commands.forEach((command) => {
    const [, count, , from, , to] = command;

    const toMove = start[from].slice(-count);
    start[to] = [...start[to], ...toMove.reverse()];
    start[from].splice(-count, count);
  });

  return Object.values(start)
    .reduce((acc, item) => `${acc}${item[item.length - 1]}`, '');
};


console.log(solution(string));