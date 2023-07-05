let name = 'Mohammad Memar';

console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

let password = 'abc123pasword098';
console.log(password.includes('password'));

let isValidPassword = function (password) {
  return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('asda'));
console.log(isValidPassword('asda$21242Dsdfasd'));
console.log(isValidPassword('asdapassword'));
