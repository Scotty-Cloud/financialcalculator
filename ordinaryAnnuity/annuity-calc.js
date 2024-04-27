
const monthlyPayOutInput = document.getElementById("monthlyPayOut");
const expectedInterestRateInput = document.getElementById("expected-interest-rate");
const payOutYearsInput = document.getElementById("payOutYears");

const resultDiv = document.getElementById("result");

// Add event listener to the calculate button

calculateButton.addEventListener("click", calculateAnnuity);

// Function to calculate the present value of an ordinary annuity

function calculateAnnuity() {
  const monthlyPayOut = parseFloat(monthlyPayOutInput.value);
  const expectedInterestRate = parseFloat(expectedInterestRateInput.value);
  const payOutYears = parseInt(payOutYearsInput.value);
  // Calculate the present value of the annuity
  const presentValue = calculatePresentValue(
    monthlyPayOut,
    expectedInterestRate,
    payOutYears
  );
  // Display the result
  resultDiv.innerText = `The present value of the annuity is: $${presentValue.toFixed(
    2
  )}`;
}

// Function to calculate the present value of an ordinary annuity

function calculatePresentValue(
  monthlyPayOut,
  expectedInterestRate,
  payOutYears
) {
  const periods = payOutYears * 12; // Convert years to months
  const rate = expectedInterestRate / 12; // Convert annual interest rate to monthly rate
  let presentValue = 0;
  for (let i = 1; i <= periods; i++) {
    presentValue += monthlyPayOut / Math.pow(1 + rate, i);
  }
    return presentValue;
}
document
  .getElementById("calculate")
  .addEventListener("click", calculateAnnuity);