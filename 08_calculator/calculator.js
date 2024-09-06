const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let mySum = 0;
  array.forEach( num => {
    mySum += num;
})
  return mySum;
};

const multiply = function(array) {
  let newNum = 1;
  array.forEach( num => {
    newNum *= num;
  })
  return newNum;
};

const power = function(num1, power) {
  let newNum = 1;
  for (let i = 0; i < power; i++) {
    newNum *= num1; 
  }
  return newNum;
};

const factorial = function(num) {
	let factorial = 1;
  let factor = 0;
  for (let i = 0; i < num; i++) {
    factorial *= (num - factor);
    factor++; 
  }
  return factorial;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
