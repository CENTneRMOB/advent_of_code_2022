import readFile from '../inputReader.mjs';

const filepath = 'day_2/input';

const string = readFile(filepath);

const opponent = {
  'A': 1, //rock
  'B': 2, //paper
  'C': 3, //scissors
};

const me = {
  'X': 1, //rock
  'Y': 2, //paper
  'Z': 3, //scissors
};

const results = {
  'draw': 3,
  'win': 6,
  'lost': 0,
};

const solution = (string) => {
  const arr = string
    .split('\n')
    .map((round) => {
      let sum = 0;
      const op = opponent[round[0]];
      const my = me[round[round.length - 1]];
      const result = op - my;
      if (result === 0) {
        sum += my + results['draw'];
      } else if (result === -1 || result === 2) {
        sum += my + results['win'];
      } else {
        sum += my + results['lost'];
      }

      return sum;
    });

    return arr.reduce((acc, el) => acc + el, 0);
};


 console.log(solution(string));
