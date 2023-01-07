/*
DESCRIPTION:
You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.

NOTE:
The sum of the measures of the interior angles of a triangle in Euclidean space is always 180 degrees.
*/

function otherAngle(a, b) {
    return 180 - (a + b);
};