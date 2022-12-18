const convertToCelsius = function (a) {
  const b = ((a - 32) * 5) / 9;
  if (Number.isInteger(b)) {
    return b;
  } else {
    return Number(b.toFixed(1));
  }
};

const convertToFahrenheit = function (a) {
  const b = (a * 9) / 5 + 32;
  if (Number.isInteger(b)) {
    return b;
  } else {
    return Number(b.toFixed(1));
  }
};

console.log(convertToCelsius(100));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
