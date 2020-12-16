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

// 2nd way isNaN
  function areANumbers(num1, num2){
   return (typeof num1 === "number") && (typeof num2 === "number")
  }

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

 function AddUp(num){
   console.log (`The result for ${num} is ${num * (num+1) / 2}`)

 }
  AddUp(4);
  AddUp(13);
  AddUp(600);

 // version 2
 function sumUp(Num) {
     var result = 0;
     for (var i=1; i<= Num; i++) {
         result += i; // result = result + i ;
     }
     return result;
 }

 
console.log("Cubed_________________________________________")
// Cubed
// Create a function that takes in three numbers and returns the sum of its cubes.
// Examples:

function Cube(num1, num2, num3) {
    var sumOfCubes = (num1 * 3)+(num2 * 3)+(num3 * 3);
    console.log(`The sum of cubes of ${num1}, ${num2}, ${num3} is ${sumOfCubes}`)
}
Cube(9, 8, 5);





console.log("String Check__________________________________")
// ? Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

function isStrStartOfWord(str, word){
   for (var i = 0; i < word.length;i++) {
       if (str[i] != word[i]) { 
           return false;
       }
   }
   return true;
}
console.log(isStrStartOfWord("Florin", "Florin"));
console.log(isStrStartOfWord("Florin", "Flaus"));



console.log("Less Than or Equal to Zero?___________________");
// Less Than or Equal to Zero?
//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function isLessOrEqualZero(n) 
{
    if (n <= 0) 
    return true;
    else return false
}
console.log(isLessOrEqualZero(-4));
console.log(isLessOrEqualZero(1));
console.log(isLessOrEqualZero(0));
console.log(isLessOrEqualZero(3));

console.log("Count Occurrences_____________________________");
// Count Occurrences
 //Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

 function countOccurrences(string,letter) {
     let letterCount = 0 ;
     for (let position = 0; position < string.length; position++) {
         if (string.charAt(position) === letter)
         {
             letterCount += 1;
         }
     }
     return letterCount;
 }
 console.log(countOccurrences("java script is a easy language", "a"));
