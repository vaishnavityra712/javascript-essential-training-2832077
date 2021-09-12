/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Books from "./Book.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const kitabe = new Books(
    "Harry Potter",
    "J. K. Rowling",
    "Fantasy Fiction",
    "26 June 1997",
    1000,
    "Bloomsbury Publishing",
)
console.log("Books object:", kitabe);
console.log("total numbered books:", kitabe.no_of_books_sold)