# Day 02

## Trivia
- Code editors are also referred to as IDEs (Integrated Development Environment) - that means, a text editor with a bunch of plugins for coding

## Learnings
- Comments can be introduced by `// single line` (line comment) or `/** text here can be multiline **/` (block comment)
- Choose descriptive naming for constants, variables, ...
- Output can be produced by `console.log()` (`log` is a method of the `console` object)
- Some "magic" numbers, like Pi, have predefined constants within JavaScript's class library (in this case `Math.PI` - where `Math` is a module within the class library and `PI` is a constant within that module)

## Problems
- Executing a JavaScript
  - Always create a file ending `.js` and put your code (i.e. console.log, etc.) in there
  - Then run `node <filepath>` where you replace `<filepath>` with the actual path to your js file


## Today: Variables and Constants
- Variables are values that can be changed
- Constants cannot be changed

### Declaring variables
- Defining a variable means "creating" a new variable
- There are separate keywords for creating constants and variables
- `const` creates a constant
- `let` creates a variable
- History: back in ECMAScript 5, the keyword `var` was used to create a variables
  - there have been no constants back then
  - you can still use it today, but you should not
  - if I catch you, I'll OMEN your ass

This declares a constant with the name `age`.
`const age;`

This declares a variables with the name `age`.
`let age;`

### Initializing a variable/constant

Declare the variable first:
`let age;`

Initialize it with a value:
`age = 31;`
`age = age + 1;`

### Combining both

Declare and initialize in one line of code:
`let age = 31;`
`const age = 31;`

`console.log(age);`
