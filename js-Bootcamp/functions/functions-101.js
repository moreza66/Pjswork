let greetUser = function () {
  console.log('Welcome!');
};

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(2);
let otherValue = square(10);

console.log(value, otherValue);

let conertFahrenheitToCelsius = function (temp) {
  let result = ((temp - 32) * 5) / 9;
  return result;
};

let value1 = conertFahrenheitToCelsius(32);
let value2 = conertFahrenheitToCelsius(68);

console.log(value1, value2);
