/*
DESCRIPTION:
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

NOTE (MDN):
The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number.
*/

const quarterOf = (month) => {
    return Math.ceil(month/3);
  };