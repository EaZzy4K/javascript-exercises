const convertToCelsius = function(farenheit) {
  celsius = Math.round((farenheit - 32) * (5/9) * 10) / 10
  return farenheit + " Farenheit to Celsius is: " + celsius + " Celsius"
};

console.log(convertToCelsius(100))

const convertToFahrenheit = function(celsius) {
  farenheit = Math.round(((celsius * (9/5)) + 32) * 10) / 10
  return celsius + " Celsius to Farenheit is: " + farenheit + " Farenheit"
};

console.log(convertToFahrenheit(37.8))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
