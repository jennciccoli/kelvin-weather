// Forecast today is 293 Kelvin
const kelvin = 293;
// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
// Fehrenheit is Celsius * (9/5) + 32 degrees
let fehrenheit = celsius * (9/5) + 32;
// Since this will result in a decimal number it's best to round down the temperature
fehrenheit = Math.floor(fehrenheit);
// Now we're trying Newton
let newton = celsius * (33/100);
// This will round it down
newton = Math.floor(newton);
console.log(`The temperature is ${fehrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
