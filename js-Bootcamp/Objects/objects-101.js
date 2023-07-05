let myBook = {
  title: 'Avator',
  author: 'Tom Hanks',
  pageCount: '1339',
};

console.log(
  `${myBook.title} by ${myBook.author} with ${myBook.pageCount} pages`
);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author} `);

let myInfo = {
  name: 'Mohammad',
  age: 35,
  located: 'Houston, Tx',
};
console.log(
  `${myInfo.name} is ${myInfo.age} years old, and lives is ${myInfo.located}`
);

console.log(
  `${myInfo.name} is ${myInfo.age + 1} years old, and lives is ${
    myInfo.located
  }`
);
