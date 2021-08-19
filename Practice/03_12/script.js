/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Teddy from "./Teddy.js";

const softtoy = new Teddy(
    "cloths",
    "cotton",
    2,
    2,
    3,
    4,
    1,
);
console.log("Softtoy object: ", softtoy);

import Backpack from './Backpack.js';

const everydaypack = new Backpack(
    "puma",
    45,
    "red",
    15,
    25,
    25,
    true
)
console.log("everydaypack object: ", everydaypack);

import Office from "./Office.js";

const work = new Office(
    24,
    48,
    24,
    48,
    48,
)
console.log("work object: ", work);