// function to make bank accts (the constructor)

function BankAccount(firstName, lastName, age, initialDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.initialDeposit = initialDeposit;
}

// prototype function that will be available to all instances of 'BankAccount'

BankAccount.prototype.deposit = function () {
  return this.initialDeposit + newDeposit;
};

// function to make/hold many instances of BankAccount objects.

function AllAccountsAtBank() {
  this.accounts = {};
}

AllAccountsAtBank.prototype.addAccount = function (account) {
  this.accounts[account.firstName] = account;
};




