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
  this.accountNumberToAssign = 100;
}

AllAccountsAtBank.prototype.assignAcctNumber = function (account) {
  this.accountNumberToAssign +=1;
  return this.accountNumberToAssign;
}

AllAccountsAtBank.prototype.addAccount = function (account) {
  account.accountNumber = this.assignAcctNumber();
  this.accounts[account.accountNumber] = account;

};





