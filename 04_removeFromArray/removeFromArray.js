const removeFromArray = function (origArray, ...matches) {
  if (Array.isArray(origArray)) {
    // Filter out any elements that have deep equality with any of the matches that need to be removed
    return origArray.filter(elem => matches.findIndex(match => match === elem) === -1);
  }

  return 'ERROR';
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
