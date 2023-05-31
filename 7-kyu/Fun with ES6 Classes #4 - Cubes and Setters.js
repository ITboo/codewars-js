/*
DESCRIPTION:

Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.

No initial code will be given. You are free to use whatever syntax you like to complete this Kata but it is highly recommended that you use ES6 syntax and features to complete this Kata.*/

class Cube {
    constructor(length) {
        this.length = length;
    }
    get surfaceArea() {
        return this.length * this.length * 6;
    }
    get volume() {
        return this.length * this.length * this.length;
    }
    set surfaceArea(newArea) {
        this.length = Math.sqrt(newArea / 6);
    }
    set volume(newVolume) {
        this.length = Math.pow(newVolume, (1 / 3));
    }
}