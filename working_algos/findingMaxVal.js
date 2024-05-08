// PROBLEM 

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers = [1, 2, 3, 4, 5];
const othernumbers = [12, 16, 1, 9, 15, 6, 2, 3]
console.log(findMax(numbers)); // Expected output: 5
console.log(findMax(othernumbers))

//////// Solution is that this just works as expected lol 