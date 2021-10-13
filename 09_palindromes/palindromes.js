const palindromes = function (query) {
  if (typeof query != 'string') throw new Error(`Invalid input for palindrome check. Received: ${query}`);

  const charArray = Array.from(
    query
      .trim()
      .replace(/\s/g, '')
      .toUpperCase()
  );

  const queryArray = charArray.filter(char => (/[A-Z]/).test(char));
  const reversedArray = [...queryArray].reverse();

  return queryArray.every((char, idx) => char === reversedArray[idx]);
};

// Do not edit below this line
module.exports = palindromes;
