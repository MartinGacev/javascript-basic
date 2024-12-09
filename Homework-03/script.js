
let balance = 500
let amountRequested = 400
function atmWithdrawal(balance, amountRequested) {

    if (balance < amountRequested) {
      return "Not enough money"  
    } else {
      
      const remainingBalance = balance - amountRequested
      
      
      return `You have withdrawn $${amountRequested}. Remaining balance: $${remainingBalance}.`
    }
  }

  let currentBalance = 1000

  console.log(atmWithdrawal(currentBalance, 500))   
  console.log(atmWithdrawal(currentBalance, 1500))  
  console.log(atmWithdrawal(currentBalance, 200))
  