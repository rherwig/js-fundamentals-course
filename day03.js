// Conditional Statements
// Code that only runs under specific conditions

// Task 1: You are given a random number between 0 and 100 (provided by Rico).
// If the number is above 50, I want to see the output `Number is huge` in the console.

const randomNumber = 99;

// New keyword unlocked: if
// if introduces a conditional statement
// Syntax: 
// if (<condition>) {
//   // code to run
// }
// English: if the condition is true, run the code inside the block

if (randomNumber > 50) {
    console.log('Number is huge');
}
// Task 2:
// You are provided with an age.

const age = undefined;

// If the provided age is 18 or above, output 'Access granted.' to the console.

// Task 2.1:
// In addition to the condition above, the 'Access granted.' should only be displayed, if the age is also lower than 100.
// In addition to condition above, the 'Access failed.'should be displayed if age does not meet the requirement

// && = and
// || = or

if (age >= 18 && age < 100) {
    console.log('Access granted.');
} else {
    console.log('Access failed.');
}

// if (age >= 18) { 
//     if (age < 100) {
//         console.log('Access granted.'); 
//     }

//     if (age >= 100) {
//         console.log('You are too old.');
//     }
// }

// Curly braces { } delimit blocks of code

// Task 3:
// You are provided with a username and password.
// If the username is 'admin' and the password is 'letmein', the program will output 'Login successful for user admin'.

const username = 'admin';
const password = '';

if (username === 'admin') {
    console.log('Username is admin');
}

if (password === 'letmein') {
    console.log('Password is correct');
}

// Homework: Finish Task 3.

if (username === 'admin' && password === 'letmein') {
    console.log('Login successful for user admin');
}

if (username === 'Rico' || username === 'Edge') {
    
}
