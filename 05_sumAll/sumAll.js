const sumAll = function (a, b) {
  let theSum = 0;
  if (typeof a !== `number` || typeof b !== `number`) return `ERROR`;
  if (a < 0 || b < 0) return `ERROR`;
  if (b > a) {
    for (i = a; i <= b; i++) {
      theSum += i;
    }
  } else {
    for (i = b; i <= a; i++) {
      theSum += i;
    }
  }
  return theSum;
};

// Do not edit below this line
module.exports = sumAll;
