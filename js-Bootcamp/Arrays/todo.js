const toDos = ['pray', 'exercise', 'drink water', 'study', 'make connections'];

toDos.splice(2, 1);
toDos.push('Buy Coffee');
toDos.shift();

console.log(`You have ${toDos.length} todos!!`);
toDos.forEach(function (toDo, index) {
  const num = index + 1;
  console.log(`${num}. ${toDo}`);
});

// console.log(`Todo: ${toDo[0]}`); // Output: 1
// console.log(`Todo: ${toDo[toDo.length - 2]}`);

// console.log(toDo);
