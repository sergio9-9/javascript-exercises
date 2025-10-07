const convertToCelsius = function(fahrenheit) {
    let celsius = 0;

    celsius = Math.round((( (fahrenheit - 32) * (5/9) )) * 10) / 10 ;

    return celsius;
};

const convertToFahrenheit = function(celsius) {
    let fahrenheit = 0;

    fahrenheit = Math.round((( (celsius * (9/5)) + 32)) * 10) / 10 ;

    return fahrenheit;
};

// convertToCelsius(100);
convertToFahrenheit(73.2);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Math.round(number * 10) / 10