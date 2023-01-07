/*
DESCRIPTION:
Simple, remove the spaces from the string, then return the resultant string.

NOTE (MDN):
The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

ALSO
/\s/g is a Regular Expression.

\s means "any white space character, including space, tab, form feed or line feed"
g is a flag meaning "global search"
so /\s/g means "look for every white space char."

*/

function noSpace(x) {
    return x.replace(/\s/g, "");
}
