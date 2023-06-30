/**
 * Naming:
 * Variables and constants are named in the camelCase format.
 * 
 * i.e.
 * 
 * let yearOfBirth instead of YearOfBirth or yearofbirth
 */

// Task 1: Define a constant with the name `yearOfBirth` and initialize it with the value 1992.
const yearOfBirth = 1992;
console.log(yearOfBirth);

// Task 2: Define a variable with the name `yearOfDeath` and initialize it with 2398.
let yearOfDeath = 2398;

// Task 2.1: Reassign the variable `yearOfDeath` to the value -1.
yearOfDeath = -1;

/**
 * Pro-Tip:
 * When thinking about to choose a const or a let, always go with const first and change it, when you actually need to reassign.
 */

// Special Challenge: Declare a variable with the name `firstName` and initialize it with the value Rico.
// const firstName = 'Rico';

// or "Rico"

/**
 * Data-Types
 * 
 * Variables have a type.
 * This type depends on the value they are assigned.
 * Different types may require different means of assignment.
 */

// Type 0: undefined
let myNewVariable;

console.log(myNewVariable); // this outputs `undefined`, because we only declared the var and did not init it

// Type 1: number
const n = 13;
const f = 3.14;
const m = 3e12; // = 3 * 10^12

// Type 2: string (sequence of characters)
// const name = 'Rico';
// const age = '31'; // Yes, this can be a string, too!

// Type 3: boolean (true or false value)
const isEdgeKazuyaPro = true;
const isRicoLeePro = false;

// Tip: Start boolean names with a modal verb (is, has, can, should, ...)

// Other types for later: Array, Object, Function, null

// Task 3: My name is Frank, I am 57 years old and am married. Define according variables to cover the information and init them.
// Task 3.1: My lastname is Mayer.
// Task 3.2: I want first and lastname to be stored in separate vars
// Task 3.3: Put the variable types behind the definitions as a comment `//`

const firstName = 'Frank'; // string
const lastName = 'Mayer'; // string
const age = 57; // number
const isMarried = true; // boolean

// Task 4: String concatenation
// Output the string `Nike Sneakers!` to the console using the defined variables

const brand = 'Nike';
const productName = 'Sneakers';

// 6 = 1 + 2 + 3 

console.log(brand + ' ' + productName + '!'); // "Nike Sneakers!"

// Homework:
// Put the following code into a js file:

const a = true;
const b = true;

console.log(a + b);

// Observe the result output to the console and explain why it is that way.
