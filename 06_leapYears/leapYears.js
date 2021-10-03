const leapYears = function (year) {
  if (typeof year === 'number') {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
};

// Do not edit below this line
module.exports = leapYears;
