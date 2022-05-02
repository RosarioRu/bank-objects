//BUSINESS LOGIC

// Constructor function to make bank accts.
function BankAccount(firstName, lastName, age, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = parseInt(age);
  this.balance = parseInt(balance);
}

// Prototype function that will be available to all instances of 'BankAccount'.


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

//Prototype function to look up an individual BankAccount in a particular FinancialInstitution. Returns name of individual that owns acccount.
FinancialInstitution.prototype.findAccount = function (numEntered) {
  if (this.accounts[numEntered] === undefined) {
    return "no account found";
  } else {
   return this.accounts[numEntered].firstName;
  }
};


//Prototype functions to deposit or withdraw funds from an individual acct.


FinancialInstitution.prototype.deposit = function (amount, acctNum) {
  return this.accounts[acctNum].balance += amount;
}

FinancialInstitution.prototype.withdraw = function (amount, acctNum) {
  return this.accounts[acctNum].balance -= amount;
}


//USER INTERFACE LOGIC

$(document).ready(function(){
  let bestBankEver = new FinancialInstitution();
  $("form#new-account").submit(function(event){
    event.preventDefault();
    const userFirstName=$("input#first-name").val();
    const userLastName=$("input#last-name").val();
    const userAge = $("input#age").val();//NEED TO parseINT at some pt.maybe like this?
    const userInitialDeposit=$("input#initial-deposit").val();//NEED TO parseINT at some pt.Or like this? ... no

    let newAccount = new BankAccount(userFirstName, userLastName, userAge, userInitialDeposit);

    bestBankEver.addAccount(newAccount);
    // const showUserTheirAcctNumber = bestBankEver.accounts[newAccount.accountNumber].accountNumber;
    const showUserTheirAcctNumber = newAccount.accountNumber;

    
    

    $("#test").text(showUserTheirAcctNumber);
    $("form#new-account").hide();
    $("#return-home").show();
   


  });

  $("#return-home").click(function() {
    $("#return-home").hide();
    $("#new-account").show();
    $("input#first-name").val("");
    $("input#last-name").val("");
    $("input#age").val("");
    $("input#initial-deposit").val("");
  });


  console.log(bestBankEver.accounts);



  // $("form#change-to-account").submit(function(event){
  //   event.preventDefault();
  //   const userEnteredAcctNum=$("input#enter-acct-num").val();
  //   const whatToDo = $("#deposit-or-withdraw").val();
  //   const userEnteredAmount=$parseInt(("input#amount").val());
  //   const userGreeting = bestBankEver.findAccount(userEnteredAcctNum);
  //   let newBalance;
    // if (bestBankEver.findAccount(userEnteredAcctNum) === "no account found") {
    //  return "No account found, please enter a valid account number.";
    // } else { 
    //    if(whatToDo === "deposit") {
    //      newBalance = bestBankEver.deposit(userEnteredAmount, userEnteredAcctNum);
    //    } else {
    //      newBalance = bestBankEver.withdrawl(userEnteredAmount, userEnteredAcctNum);
    //    }
    //  return "Thank you "+ bestBankEver.accounts[userEnteredAcctNum].firstName + " " + bestBankEver.accounts[userEnteredAcctNum].firstName + "." + "Your new balance is now " + newBalance " + "."
    //  };

  // });

});




