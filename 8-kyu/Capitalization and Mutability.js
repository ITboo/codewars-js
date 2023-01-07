/* 
DESCRIPTION:
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

NOTE (MDN):
The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

*/

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
     return word;
   };