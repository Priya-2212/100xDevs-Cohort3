function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
 
  const inputArray = [1, 2, 3, 4, 5, 6];
  const evenNumbers = filterEvenNumbers(inputArray);
  console.log(evenNumbers);
