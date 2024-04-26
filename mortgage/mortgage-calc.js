const principalInput = document.getElementById("principal");
const interestRateInput = document.getElementById("interest-rate");
const loanLengthInput = document.getElementById("loan-length");
const resultElement = document.getElementById("result");

function calculateMortgage() {
  const principal = parseFloat(principalInput.value);
  const interestRate = parseFloat(interestRateInput.value) / 1200; // Convert to monthly decimal
  const loanLength = parseFloat(loanLengthInput.value) * 12; // Convert to number of months
  const monthlyPayment =
    (principal * interestRate * Math.pow(1 + interestRate, loanLength)) /
    (Math.pow(1 + interestRate, loanLength) - 1);

  const totalInterestPaid = monthlyPayment * loanLength - principal;

  resultElement.textContent = `Monthly payment: $${monthlyPayment.toFixed(
    2
  )}\nTotal interest: $${totalInterestPaid.toFixed(2)}`;
}
document
  .getElementById("calculate")
  .addEventListener("click", calculateMortgage);