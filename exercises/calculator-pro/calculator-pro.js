function calculatorPro() {
  let newNumber;
  let numberList = [];

  do {
    newNumber = prompt('Enter a number or press cancel to stop');
    if (newNumber !== null) {
      if (isNaN(newNumber)) {
        alert("Please, input valid numbers!")
      } else { numberList.push(+newNumber);}
    }  
  } while (newNumber !== null);
  
  if (numberList.length == 1) {
    console.log("The result of square root is " + (Math.sqrt(numberList[0])).toFixed(3))
  } else {
    let resultSum = numberList[0];
    let resultRest = numberList[0];
    let resultMultiplication = numberList[0];
    let resultDivision = numberList[0];
      for (let i = 1; i < numberList.length; i++) {
        resultSum = resultSum + numberList[i]
        resultRest = resultSum - numberList[i]
        resultMultiplication = resultSum * numberList[i]
        resultDivision = resultSum / numberList[i]
        console.log("Results:")
        console.log("The result of the sum is " + resultSum.toFixed(3))
        console.log("The result of the rest is " + resultRest.toFixed(3))
        console.log("The result of the multiplication is " + resultMultiplication.toFixed(3))
        console.log("The result of the division is " + resultDivision.toFixed(3))
      }
  }
  if (confirm("Do you want to add new numbers?")) {
    calculatorPro()
  } else {
    console.log("Bye!");
  }
}
calculatorPro();