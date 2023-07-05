let myBook = {
  title: 'Avator',
  author: 'Tom Hanks',
  pageCount: '1339',
};
let otherBook = {
  title: 'Ring',
  author: 'Kevin Gill',
  pageCount: '442',
};

let getSummery = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};
let bookSummary = getSummery(myBook);
let otherBookSummary = getSummery(otherBook);

console.log(bookSummary.pageCountSummary);

let converFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: ((fahrenheit - 32) * 5) / 9,
    kelvin: ((fahrenheit + 459.67) * 5) / 9,
  };
};

let temp = converFahrenheit(116);
console.log(temp);
