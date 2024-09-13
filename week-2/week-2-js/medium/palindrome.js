/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.replaceAll(/[^a-zA-Z0-9\s]/g,"").replaceAll(" ","").toLowerCase();
  let check = string.split("").reverse().join("");
  // console.log(check)
  if (string === check){
    // console.log("true");
  return true;
}else{
  // console.log("false");
  return false;
}
}
// isPalindrome("A, man a plan a canal Panama")

module.exports = isPalindrome;
