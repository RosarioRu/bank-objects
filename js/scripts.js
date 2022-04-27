// Constructor function to make bank accts.

function BankAccount(firstName, lastName, age, initialDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.initialDeposit = initialDeposit;
}

// Prototype function that will be available to all instances of 'BankAccount'.

BankAccount.prototype.deposit = function () {
  return this.initialDeposit + newDeposit;
};

//Constructor function to make Bank/Credit Union objects.

function FinancialInstitution() {
  this.accounts = {};
  this.acctNumberToAssign = 100;
}

//Prototype functions that will be available to all instances of 'FinancialInstitution'.

//this one increments the acctNumberToAssign for each financial institution and returns this incremented # (this can then be assigned to the account that gets passed into).
FinancialInstitution.prototype.assignAcctNumber = function (account) {
  this.acctNumberToAssign +=1;
  return this.acctNumberToAssign;
}
//this one adds individual instances of 'BankAccount' to the FinancialInstutution it's called on. It assigns a new property to the account passed into it (.accountNumber) and gives it the value that is returned from the function .assignAcctNumber. It then assigns this value as a key with a value of the BankAccount instance itself to the object 'accounts.' 
FinancialInstitution.prototype.addAccount = function (account) {
  account.accountNumber = this.assignAcctNumber();
  this.accounts[account.accountNumber] = account;

};

//Prototype function to look up an individual BankAccount in a particular FinancialInstitution.

FinancialInstitution.prototype.findAccount = function (numEntered) {
  if (this.accounts.numEntered != undefined) {
    return "No account found";
  } else {
    return "Welcome " + this.accounts[numEntered].firstName + " Acct#: " + this.accounts[numEntered].accountNumber;
  }
};





