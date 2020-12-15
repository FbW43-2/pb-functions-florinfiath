'use strict'
console.log("Multiply______________________________________")
// Multiply
// Create a function that multiples a number by another number.
// Rework the syntax of the function declaration so that is uses the arrow function shorthand  (browse the internet for what an arrow function is).
// Write a function that accepts two numbers and validate that they are numbers.

function Multiply(a, b){
    return a*b;
};
console.log(Multiply (2,3));

// Arrow function 

(a, b) => {
    return a*b;
}

// Write a function that accepts two numbers and validate that they are numbers.

function ValidateVariableType(variable1,variable2) {
    if ((typeof (variable1) === "number") && typeof (variable2) === "number"){
    console.log("Both are numbers");
    }
 else {
    console.log("One of variable is not a number");
}
}

ValidateVariableType(3, 5)
ValidateVariableType("Florin", 5);

console.log("Exponent______________________________________")
// Exponent

/*Create a function named exponent that takes two numbers as parameters.
The second parameter defines how many times the first number should be multiplied by itself.
Save the output in a variable named result.
Then, try to access the variable result outside of the exponent function. 
Is this possible? Why/Why not? Comment your answer in the index.js file.*/

let result = 1;
function exponent(num1,num2) {
    //  let result = 1;
    for (let i=1; i <= num2; i++){
        result *= num1;
    }
    return result;
}
console.log(`The result is: ${exponent(2, 3)}`)

// When variable result is outside the function , it becomes an global variable and it is accessible and active for the function itself ...



console.log("Add Up________________________________________")
// Add Up
/* Create a function that takes an integer as an argument. 
Add up all the integers from 1 to the integer you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 Examples:
sumIntFrom1ToN(4) ➞ 10
sumIntFrom1ToN(13) ➞ 91
sumIntFrom1ToN(600) ➞ 180300 */

console.log("Cubed_________________________________________")
// Cubed
// Create a function that takes in three numbers and returns the sum of its cubes.
// Examples:


console.log("String Check__________________________________")
// String Check
// umOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// 5TsumOfCubes() ➞ 0


console.log("Less Than or Equal to Zero?___________________");
// Less Than or Equal to Zero?

console.log("Count Occurrences_____________________________");
// Count Occurrences