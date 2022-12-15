import readFile from '../inputReader.mjs';

const filepath = 'day_1/input';

const string = readFile(filepath);

const getMaxCalories = (string) => {
  let result = 0;
  const arr = string.split('\n')
    .reduce((acc, el) => {
      const num = Number(el);
      if (!num) {
        acc.push(result);
        result = 0;
      } else {
        result += num;
      }
  
      return acc;
    }, []);

  return Math.max(...arr);
};


 console.log(getMaxCalories(string));
