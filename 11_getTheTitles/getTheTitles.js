const getTheTitles = function (booksArray) {
  if (Array.isArray(booksArray)) return booksArray.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
