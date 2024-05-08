// PROBLEM 

const findLongestWord = (sentence) => {
  let words = sentence.split(' ');
  let longestWord = '';

  for (let word of words) {
    debugger;
    if (word.length > longestWord) {
      longestWord = word;
    } 
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Expected output: "jumps"
console.log(findLongestWord("Hello there")); // Expected output: "Hello"
console.log(findLongestWord("")); // Expected output: ""

// The findLongestWord function should return the first longest word in the given sentence. If there are multiple words with the same maximum length, it should return the first occurrence of that word.
// However, there's an issue with the implementation that causes incorrect output in some cases.
// When you run this code, the output will be:
// The 
// Hello
// (empty string)

////////////////////// Solutions

//Response: I've added a debugger before the if statement so that I could see what was happening in the loop. First, I saw "The" become the longest word, but all following words after were undefined, due to the fact that the comparison become if word.length (5 for "quick") is greater than "the" --- which makes no sense. So the loop would then fail. This let me know that we were not comparing lengths of the longest word, so I added.length to longestword.length to solve. 

const findLongestWordFixed = (sentence) => {
    let words = sentence.split(' ');
    let longestWord = '';

    for (let word of words){
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWordFixed("The quick brown fox jumps over the lazy dog")); // Expected output: "jumps"
console.log(findLongestWordFixed("Hello there")); // Expected output: "Hello"
console.log(findLongestWordFixed("")); // Expected output: ""