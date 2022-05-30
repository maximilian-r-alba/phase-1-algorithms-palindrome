function isPalindrome(word) {
  // Write your algorithm here
 let originialWord = []
 let reverseWord = []
 for (letter of word){
    originialWord.unshift(letter)
    reverseWord.push(letter)
 }

 let a = originialWord.join()
 let b = reverseWord.join()
 
 return a===b
}

/* 
  Add your pseudocode here


*/

/*
  Add written explanation of your solution here
  Create two empty arrays to store letters of word and its reverse.
  Iterate through letters of the word while adding them to the respective arrays using unshift and push
  c
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
