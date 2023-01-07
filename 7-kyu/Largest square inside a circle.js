/*
DESCRIPTION:
Determine the area of the largest square that can fit inside a circle with radius r.

NOTE:
Given radius of circle is r
Then area of circle=π(r^2)

Since two opposing corners of the square touch the circle, that diagonal in the square is equivalent to the diameter (2r) of the circle.
Now to find one side of the square we will set up Pythagoras theorem:
a^2+b^2=c^2

Since it is a square a=b which means all  the sides are same
∴2a^2=c^2

We know c, which is 2r, the diagonal.
∴2a^2 =(2r)^2 ⇒2a^2=4r^2 ⇒a^2 =2r^2

We can leave it as a^2 since a is one side of the square and a^2 would be the area of the square.
So the area of the square =2(r^2)

*/

function areaLargestSquare(r) {
    return 2 * r * r;
};