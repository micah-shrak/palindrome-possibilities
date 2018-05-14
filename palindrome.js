// Rudimentary at best

function palindrome(str) {
  str = str.toLowerCase();
  var reverseStr = "";

  for(var i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (str === reverseStr) {
    console.log("These are palindromes.");
    return true;
  }  else {
    console.log("Nope, don\'t think so");
    return false;
  }

}

