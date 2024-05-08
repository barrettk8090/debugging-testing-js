// PROBLEM 

function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countOccurrences("hello", "l")); // Expected output: 2
  console.log(countOccurrences("javascript", "a")); // Expected output: 2
  console.log(countOccurrences("", "x")); // Expected output: 0
  console.log(countOccurrences("Hello World!", " "))
  console.log(countOccurrences("Hello World!", "!"))

//   The countOccurrences function is supposed to take a string str and a character char as input, and return the number of occurrences of char in str. However, there's an issue with the implementation that causes incorrect output in some cases.
// When you run this code, the output will be:

// 2
// 2
// 0

// This output seems correct initially, but there's a subtle issue with the function that becomes apparent when you test it with certain inputs.