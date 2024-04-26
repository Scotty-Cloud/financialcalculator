// Calculator for the future value of a one-time deposit with compound interest

function futureValueCalculator() {
  // User input for deposit, interest rate, and number of years

  var deposit = parseFloat(document.getElementById("deposit").value);

  var interestRate = parseFloat(document.getElementById("interest-rate").value);

  var years = parseInt(document.getElementById("years").value);

  // Calculation for future value and total interest earned

  var futureValue = deposit * Math.pow(1 + interestRate, years);

  var totalInterest = futureValue - deposit;

  // Display of results

  document.getElementById("result").innerText =
    "Your CD's ending balance will be $" +
    futureValue.toFixed(2) +
    " and you would have earned $" +
    totalInterest.toFixed(2) +
    " in interest.";
}

// Attach event listener to the button

document.getElementById("calculate").addEventListener("click", function () {
  futureValueCalculator();
});