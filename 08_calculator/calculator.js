const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (numArray) {
  return Array.from(numArray).reduce((total, num) => add(total, num), 0);
};

const multiply = function (numArray) {
  return Array.from(numArray).reduce((total, num) => total * num, 1);
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (x) {
  const numArray = Array(x).fill().map((_, idx) => idx + 1);
  return multiply(numArray);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
