// function isPalindrome(word) {
//   // Write your algorithm here
// }

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

// module.exports = isPalindrome;

function isPalindrome(word) {
  // Convert the word to lowercase to handle case-insensitive palindrome check
  word = word.toLowerCase();

  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = word.length - 1;

  // Iterate over the word from both ends until the pointers meet
  while (start < end) {
    // If the characters at the pointers are not equal, return false (not a palindrome)
    if (word[start] !== word[end]) {
      return false;
    }
    // Move the pointers towards each other
    start++;
    end--;
  }
  
  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/*
  Pseudocode:
  1. Convert the word to lowercase.
  2. Initialize two pointers, one at the start and one at the end of the word.
  3. While the start pointer is less than the end pointer:
     a. If the characters at the pointers are not equal, return false (not a palindrome).
     b. Move the start pointer one step forward and the end pointer one step backward.
  4. If the loop completes without returning false, return true (word is a palindrome).
*/

/*
  Written explanation:
  The function takes a word as input and checks if it is a palindrome.
  It does this by using two pointers, one starting from the beginning of the word and
  the other starting from the end of the word. It iterates over the word, comparing
  characters at the pointers. If at any point the characters are not equal, it returns
  false, indicating that the word is not a palindrome. If the loop completes without
  returning false, it means that all characters matched, and the word is a palindrome,
  so it returns true.
*/

// Custom test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
