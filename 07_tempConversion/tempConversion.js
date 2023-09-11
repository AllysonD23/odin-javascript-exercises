// round to one decimal place
// Convert Fahrenheit temperature to celsius temperature
const convertToCelsius = function(fahTemp) {
  // Subtract 32 from fahrenheit temperature and multiply by (5/9) to convert to celsius
  result = (fahTemp - 32) * (5/9)
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(celTemp) {
  // Multiply celsius temperature by (9/5) and add 32 to convert to fahrenheit temperature
  result = (celTemp * (9/5) + 32)
  return Math.round(result * 10) / 10;
};

convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
