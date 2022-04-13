function calculator(num1, num2) {
  const num1 = prompt("Choose the first number:");
  const num2 = prompt("Choose the second number:");
  function reset() {
    alert("You didn't input valid numbers, try again.");
    return calculator();
  }
  if (num1 === null && num2 === null) {
    reset();
  } else {
    const floatNum1 = parseFloat(num1);
    const floatNum2 = parseFloat(num2);
    if (isNaN(floatNum1) & isNaN(floatNum2)) {
      reset();
    } else if (isNaN(floatNum1) & !isNaN(floatNum2)) {
      alert(
        "Only the second number (" +
          num2 +
          ") was recognised.\nIt square root is " +
          Math.sqrt(floatNum2).toFixed(3)
      );
    } else if (!isNaN(floatNum1) & isNaN(floatNum2)) {
      alert(
        "Only the first number (" +
          floatNum1 +
          ") was recognised.\nIt square root is " +
          Math.sqrt(floatNum1).toFixed(3)
      );
    } else {
      let sum = floatNum1 + floatNum2;
      let rest = floatNum1 - floatNum2;
      let multiplication = floatNum1 * floatNum2;
      let division = floatNum1 / floatNum2;
      let operations = [
        sum.toFixed(3),
        rest.toFixed(3),
        multiplication.toFixed(3),
        division.toFixed(3),
      ];
      alert("First number is " + floatNum1);
      alert("Second number is " + floatNum2);
      alert("Results:");
      alert("The result of the sum is " + operations[0]);
      alert("The result of the rest is " + operations[1]);
      alert("The result of the multiplication is " + operations[2]);
      alert("The result of the division is " + operations[3]);
    }
  }
}
calculator();
