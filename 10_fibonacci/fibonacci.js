const fibonacci = function (ordinal) {
  const ordInt = parseInt(ordinal);

  switch (true) {
    case ordInt <= 0: return 'OOPS';
    case ordInt < 3:
      return 1;
    default:
      return fibonacci(ordInt - 1) + fibonacci(ordInt - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
