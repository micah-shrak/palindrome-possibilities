function palindromeTwo(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
  var strReverse = str.split('').reverse().join('');

  if (str === strReverse) {
    return true;
    } else {
    return false;
    }
}
