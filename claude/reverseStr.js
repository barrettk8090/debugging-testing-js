// PROBLEM

const reverseString = (str) => {
    let reversedStr = "";
    for (let i = str.length; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  };
  
//   console.log(reverseString("hello")); // Expected output: "olleh"
//   console.log(reverseString("")); // Expected output: ""

//   The reverseString function is supposed to reverse the characters in a given string and return the reversed string. However, there's an issue with the implementation that causes incorrect output.
//   When you run this code, the output will be:
//   undefinedolleh
//   undefined
//   Instead of the expected solution:
//   olleh
//   and an empty string for the second console log. Identify the issue by providing debugging solutions. 

////////////////////// Solutions

// Response: To solve this, i’d probably put a console.log(reversesStr) within the for loop to isolate the possibility that the loop is running as expected - id want to see what’s happening each time it’s running to see if there’s something wrong about the looping characteristics. If it works as expected, then id assume that maybe the return statement is in the wrong place. If it doesn’t work as expected, id take a closer look at the way the for loop is configured and maybe use debugger() to see if i can figure out what’s happen.

const reverseStringDebug = (str) => {
    let reversedStr = "";
    for (let i = str.length; i >=0; i--){
        reversedStr += str[i];
        console.log(reversedStr);
    }
    return reversedStr;
}

console.log(reverseStringDebug("hello"))

// Output of debug:
//undefined
// undefinedo
// undefinedol
// undefinedoll
// undefinedolle
// undefinedolleh
// undefinedolleh

// This tells me that there's an issue in the loop, specifically in the very first iteration.
// Trying to access str[5] which does not exist. Error seems to lie in let i = str.length

const reverseStringFixed = (str) => {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseStringFixed("hello"));
console.log(reverseStringFixed(""));
console.log(reverseStringFixed("goodbye"));