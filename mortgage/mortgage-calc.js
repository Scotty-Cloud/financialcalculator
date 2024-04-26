// Get the input elements

const principalInput = document.getElementById("principal");

const interestRateInput = document.getElementById("interest-rate");

const loanLengthInput = document.getElementById("loan-length");

// Get the result element

const resultElement = document.getElementById("result");

// Define a function to calculate the monthly payment and total interest paid

function calculateMortgage() {
  // Get the input values

  const principal = parseFloat(principalInput.value);

  const interestRate = parseFloat(interestRateInput.value) / 100 / 12; // Convert to monthly decimal

  const loanLength = parseFloat(loanLengthInput.value) * 12; // Convert to number of months

  // Calculate the monthly payment using the compound interest formula

  const monthlyPayment =
    (principal * interestRate * Math.pow(1 + interestRate, loanLength)) /
    (Math.pow(1 + interestRate, loanLength) - 1);

  // Calculate the total interest paid

  const totalInterestPaid = monthlyPayment * loanLength - principal;

  // Format and display the results

  resultElement.textContent = `Your monthly payment will be $${monthlyPayment.toFixed(
    2
  )} and you will pay $${totalInterestPaid.toFixed(
    2
  )} in interest over the life of the loan.`;
}

// Add an event listener to the calculate button

document
  .getElementById("calculate")
  .addEventListener("click", calculateMortgage);
