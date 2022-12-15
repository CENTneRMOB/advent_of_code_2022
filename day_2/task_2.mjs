import readFile from '../inputReader.mjs';

const filepath = 'day_2/input';

const string = readFile(filepath);

const opponent = {
  'A': 1, //rock
  'B': 2, //paper
  'C': 3, //scissors
};

const me = {
  'X': 'lost', //rock lost
  'Y': 'draw', //paper draw
  'Z': 'win', //scissors win
};

const results = {
  'draw': 3,
  'win': 6,
  'lost': 0,
};

const guide = {
  'A': {
    'draw': opponent['A'],
    'win': opponent['B'],
    'lost': opponent['C'],
  },
  'B': {
    'draw': opponent['B'],
    'win': opponent['C'],
    'lost': opponent['A'],
  },
  'C': {
    'draw': opponent['C'],
    'win': opponent['A'],
    'lost': opponent['B'],
  },
}

const solution = (string) => {
  const elements = string
    .split('\n')
    .map((round) => {
      const op = round[0];
      const my = round[round.length - 1];
      
      return results[me[my]] + guide[op][me[my]];
    });
  return elements.reduce((acc, el) => acc + el, 0);
};

console.log(solution(string));