let add = function (a, b) {
  return a + b;
};

let result = add(10, 1);
console.log(result);

let getScoreText = function (name = 'Mohammad', score = 0) {
  return `Name ${name} - Score: ${score}`;
  //return 'Name: ' + name + ' - Score: ' + score;
};

let scoreText = getScoreText('Elham', 99);
console.log(scoreText);

let getTip = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = total * tipPercent;
  return `A ${percent}% tip on $${total} would be ${tip}`;
};

let tip = getTip(60);
console.log(tip);
