/*
DESCRIPTION:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

NOTE (MDN):
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
*/

function removeChar(str) {
    return str.slice(1, -1);
};
