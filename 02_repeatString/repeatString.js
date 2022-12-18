const repeatString = function (string, num) {
  //passes all
  // if (num < 0) {
  //   return "ERROR";
  // } else {
  //   return string.repeat(num);
  // }
  // passes all

  if (num < 0) return `ERROR`;
  let writing = ``;
  for (let i = 1; i <= num; i++) {
    writing = writing + string;
  }
  return writing;
};

// console.log(repeatString(`hey`, -2));

// Do not edit below this line
module.exports = repeatString;
