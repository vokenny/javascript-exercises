const repeatString = function (queryStr, repeaterNum) {
  return repeaterNum < 0 ? 'ERROR' : queryStr.repeat(repeaterNum);
};

// Do not edit below this line
module.exports = repeatString;
