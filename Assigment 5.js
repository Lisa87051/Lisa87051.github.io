
// A. The temperature converter
let celsius = Math.floor(Math.random());
let fahrenheit = (celsius * 9/5) + 32;
console.log(`It is ${celsius} degrees Celsius and ${fahrenheit} degrees Fahrenheit.`);

// B. BMI

// B1.
let johnBMI = 28.3;
let lucasBMI = 23.9;

if (johnBMI > lucasBMI) {
  console.log(`John\'s BMI is higher than Lucas!`)
}
else {
  console.log(`Lucas\' BMI is higher than John\'s!`)
}

// B2.
if (johnBMI > lucasBMI) {
  console.log(`John\'s BMI (${johnBMI}) is higher than Lucas\' BMI (${lucasBMI}), that is ${johnBMI > lucasBMI}!`)
}
else {
 console.log(`John\'s BMI (${johnBMI}) is higher than Lucas\' BMI (${lucasBMI}), that is ${johnBMI > lucasBMI}!`)
}

// C.
let user = prompt('Please enter a number.');
if (user === !num || string) {
  console.log(`Please enter a number!`)
}
else if(10){
 console.log(`You win 10 points.`)
}
else if(8){
  console.log(`You win 8 points.`)
}
else {
  console.log(`NOT MATCHED!!`)
}
alert(user);

// D. Winner

const Nets = [80, 82, 100];
const Knicks = [80, 90, 106];

if (Knicks.average === Nets.average && average > 100) {
  console.log(`Knicks and Nets are tied.`);
  }

else if (Nets.average > Knicks.average && average >= 100) {
  console.log(`Nets wins the trophy!`);
}
else {
  console.log(`Knicks wins the trophy!`);
}

// E. Tip Calculator

let bill = 90;
let tip = 0.15 * bill;
totalBill = bill + tip;

let extraTip = 0.20 * bill;
totalBill2 = bill + extraTip;


if (100 <= bill >=30) {
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalBill}.`)
}
else {
  console.log(`The bill was ${bill}, the tip was ${extraTip}, and the total value is ${totalBill2}.`)
}

// F. Arrow Functions (2)

// F1. Celsius to Fahrenheit Convertor

function convertCelsiusToFahrenheit (celsius) {
  if (celsius >= -89.3 && celsius <= 56.7);
  return (celsius * 9/5) + 32;
}
const temperature = convertCelsiusToFahrenheit(20);
console.log(temperature);

// F2. Fahrenheit to Celsius Convertor

function convertFahrenheitToCelsius (fahrenheit) {
  if (fahrenheit >= -128.74 && fahrenheit <= 134.06);
  return (fahrenheit - 32) * 5/9;
}
const temperature = convertFahrenheitToCelsius(100);
console.log(temperature);
