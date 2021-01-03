function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1,num2) {
	return num1 - num2;
}

function sum (arr) {
	let value = 0;
	for (let i = 0; i < arr.length; i++) {
		value += arr[i];
	}
	return value;
}

function multiply (arr) {
	let value = 1;
	for (let i = 0; i < arr.length; i++) {
		value *= arr[i];
	}
	return value;
}

function power(num, power) {
	let value = 1;
	for(let i = 1; i <= power; i++){
		value *= num;
	}
	return value;
}

function factorial(num) {
	const ONE = 1;
	let value = 1;
	for (let i = num; i >= ONE; i--) {
		value *= i; 
	}
	return value;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}