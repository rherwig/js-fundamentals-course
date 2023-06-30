// Code gets executed/interpreted by another program (i.e. NodeJS, Browser).
// <-- This is a comment. It gets IGNORED by the "runtime".

/**
 * Concept 0: Running programs from the command line.
 * 
 * Structure:
 * <program> [argument] [options]
 * 
 * Examples:
 * node (no arguments and no options)
 * node -v (no arguments, but the -v option)
 * node main.js (main.js as an argument, but no options)
 */

/**
 * Concept 1: Comments
 * 
 * This is also a comment, but across multiple lines.
 * Like this.
 */

// Task 1: Type out some comments.

// Edge is following instructions

/**
 * This is a multiline comment.
 * Like this.
 */


/**
 * Concept 2: I/O - Input/Output
 * 
 * I/O refers to the capability of a program to display data on the screen or output it in another way (i.e. write to a file)
 * and to accept user input.
 * 
 * In JS we will focus on output for now, input follows later.
 * 
 * Outputs:
 * - Print text to a console
 * - Run another program
 * - Store result in a database
 * - Upload result to a cloud service
 * - Send result via (Fe-)Mail or other transport
 * 
 * It is not always about showing text to a user!
 */

console.log(7);

// Task 1: Output the result of 4 times 13 to the screen.

console.log(4*13);
console.log(123);

// Task 2:
// 
// Part 1:
// I want to have a way of calculating my age (61 years) in seconds and display it.

// Divide and Conquer
// Subproblem 1: Convert years to seconds
// -> 31536000
// Subproblem 2: Output result of the conversion to console
console.log(61*31536000);

// Part 2:
// I want to know the age in seconds of my daughter as well - she's 29.

console.log(29*31536000);

/**
 * Concept 3: Variables
 * 
 * Structure:
 * <const | let> <name> = <value>;
 */

console.log(7);

// produces the same output as

// const === constant (a value that cannot be changed)
const secondsInYear = 31536000;
const secondsInYearCalculation = 60 * 60 * 24 * 365.25;
const secondsInHour = 60 * 60;

console.log(29 * secondsInYear);

// Task 3:
// As a user, I want to provide a radius of a circle, in order to calculate its area and output it to the console.

const radius = 5; // User provided radius

// (A = π r²)
console.log(Math.PI * (radius * radius));

// Math.pow(base, exponent);
// radius to the power of two <== this is a number bruh,cmon. radius ^ 2

console.log(Math.pow(radius, 3));

const combo = "d+2;f+2,N,1;1;f,F+1+2,1+2";

