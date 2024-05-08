// PROBLEM 

function findMissingNumber(arr) {
    const n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2;
  
    for (let i = 0; i < arr.length; i++) {
      totalSum -= arr[i];
    }
  
    return totalSum;
  }
  
  console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])); // Expected output: 5
  console.log(findMissingNumber([7, 9, 6, 8, 10, 5, 3, 2, 1])); // Expected output: 4
  console.log(findMissingNumber([9, 8, 7, 6, 4, 3, 2, 1])); // Expected output: 5
  console.log(findMissingNumber([1, 2, 3, 4, 5, 7, 8, 9, 10]));


