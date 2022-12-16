import readFile from '../inputReader.mjs';

const filepath = 'day_4/input';

const string = readFile(filepath);

const solution = (string) => {
  const count = string
    .split('\n')
    .reduce((acc, pair) => {
      const areas = pair
        .split(',')
        .flatMap((area) => {
          return area.split('-').map((num) => Number(num));
        });
      
      const [f1, f2, s1, s2] = areas;

      if ((f1 >= s1 && f2 <= s2)
        || (f1 <= s1 && f2 >= s2)) {
          acc += 1;
        }

        return acc;
    }, 0);
  
  return count;
};

console.log(solution(string));