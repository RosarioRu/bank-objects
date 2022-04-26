// function to make bank accts (the constructor)

function BankAccount(firstName, lastName, age, initialDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.initialDeposit = initialDeposit;
}

// prototype function that will be available to all instances of 'BankAccount'



String.prototype.addExcitement = function() { return this + "!!!!!!!!!" };