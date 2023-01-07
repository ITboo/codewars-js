/*
DESCRIPTION:
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.


NOTE (MDN):
The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.

*/

function switchItUp(number){
    switch (number) {
      case number = 0: return "Zero";
      case number = 1: return "One";
      case number = 2: return "Two";
      case number = 3: return "Three";
      case number = 4: return "Four";
      case number = 5: return "Five";
      case number = 6: return "Six";
      case number = 7: return "Seven";
      case number = 8: return "Eight";
      case number = 9: return "Nine";
      }
    };

//OR

switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
