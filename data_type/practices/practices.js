let num = '20';
let result = parseInt(num)+10;
console.log(result)



let pi = "3.14159";
let value = parseFloat(pi)
console.log(value)



let character = "premikBoy";
let numMake = parseInt(character);
console.log(numMake)


let sum = 3.456 + 2.789;
let results = parseFloat(sum.toFixed(2));
console.log(results)


let num1 = '56.78';
let num2 = '12.34';
let result3 = parseFloat(num1) + parseFloat(num2);
console.log(result3)

let money1 = '10.5678';
let money2 = '5.4321';
let result4 = parseFloat(money1) + parseFloat(money2);
let finalResult1 = parseFloat(result4.toFixed(1));
console.log(finalResult1);

let numbers = '42.23456879';
let finalNum = parseFloat(parseFloat(numbers).toFixed(3));
/**
 * here, the toFixed() method can not apply on string, so parseFloat(numbers) makes it number first. then toFixed() makes it string again and the first parseFloat makes it number again.
 */
console.log(finalNum)