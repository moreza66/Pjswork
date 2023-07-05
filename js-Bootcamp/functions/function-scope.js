let conertFahrenheitToCelsius = function (temp) {
  let result = ((temp - 32) * 5) / 9;
  return result;
};

let tempOne = conertFahrenheitToCelsius(32);
let tempTwo = conertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
