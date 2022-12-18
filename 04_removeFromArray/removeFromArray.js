const removeFromArray = function (a, b) {
  for (let i = 1; i < arguments.length; i++) {
    const currentArgument = arguments[i];
    const position = a.indexOf(currentArgument);
    if (position < 0) {
      continue;
    } else {
      a.splice(position, 1);
    }
  }
  return a;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
