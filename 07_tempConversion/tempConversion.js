const convertToCelsius = function(fahr) {
  let fahrenheit = ((fahr - 32) * (5 / 9));
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit
  } else {
    return Number(fahrenheit.toFixed(1));
  }
};

const convertToFahrenheit = function(cels) {
  let celsius = ((9/5) * cels) + 32;
  if (Number.isInteger(celsius)) {
    return celsius
  } else {
    return Number(celsius.toFixed(1));
  }
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
