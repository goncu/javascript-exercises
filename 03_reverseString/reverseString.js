const reverseString = function (text) {
  let finalText = "";
  for (i = text.length; i > 0; i--) {
    let character = text.charAt(i - 1);
    finalText += character;
  }
  return finalText;
};

// const testing = reverseString(`hello world`);
// console.log(testing);

// Do not edit below this line
module.exports = reverseString;
