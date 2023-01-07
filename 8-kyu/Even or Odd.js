/*
DESCRIPTION:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

NOTE (MDN):
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
*/

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }