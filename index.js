// 1. Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(a, b) {
  return a - b;
}

console.log(calculateDifference(50, 100));



// 2.  Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(number) {
  return number % 2 !== 0;
}

console.log(isOdd(20));
console.log(isOdd(55));



// 3. Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

const numbers = [-10, -20, -5, 0, 2, 10];
const answer = findMin(numbers);
console.log(answer);


// 4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arryNumbers) {
  return arryNumbers.filter((number) => number % 2 === 0);
}

console.log(filterEvenNumbers([11, 20, 31, 40, 55]));


// 5. Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(sortDescendingNumbers) {
  return sortDescendingNumbers.slice().sort((a, b) => b - a);
}

console.log(sortArrayDescending([20, -10, 50, -20, 100]));



// 6. Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Java Script Assignment 2"));



// 7. Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(avgNumbers) {
  if (avgNumbers.length === 0) {
    return undefined;
  }

  const total = avgNumbers.reduce((sum, num) => sum + num, 0);
  return total / avgNumbers.length;
}

console.log(findAverage([10, 20, 30, 40, 50, 60, 70, 80]));



// 8. Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
