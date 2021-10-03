const sumAll = function (num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    if (num1 < 0 || num2 < 0) return 'ERROR';

    let result = 0;

    if (num1 < num2) {
      for (let i = num1; i <= num2; i++) {
        result = result + i;
      }
    } else if (num1 > num2) {
      for (let i = num2; i <= num1; i++) {
        result = result + i;
      }
    } else return num1;

    return result;
  }

  return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
