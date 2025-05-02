const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	const total = arr.reduce((sum, item) => sum + item, 0);
  return total;
};

const multiply = function(arr) {
  total = arr.reduce((multTotal, item) => multTotal * item, 1);
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else {
    const numArray = [];
    for (num; num > 0; num--) {
      numArray.push(num);
    }
    const factorial = numArray.reduce((total, item) => total * item, 1);
    return factorial
  }
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
