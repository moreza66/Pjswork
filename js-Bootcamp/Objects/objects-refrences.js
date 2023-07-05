let myAccount = {
  name: 'Mohammad Meamr',
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function (account, income) {
  account.income = account.income + income;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expenses = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has a balance of $${balance}. Income $${account.income}, Expenses: $${account.expenses} in expenses`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 250);
addExpense(myAccount, 1.75);

console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
