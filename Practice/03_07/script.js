/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

Teddy = {
    made: "Cloth",
    stuffed: "cotton",
    eyes: {
        right: 1,
        left: 1,
    },
    hands: 3,
    legs: 2,
    nose: 1,
}
console.log(Teddy);

Dogs = {
    type: "animals",
    legs: {
        front: 2,
        back: 2,
    },
    favourite_thing: "Cuddling",
    Food: ["dog food", "Chicken", "Bones"],
    play: "zoomies",
}
console.log(Dogs);

Office = {
    desk: 24,
    chairs: 48,
    pc: 24,
    assined_to: "Employee",
    flower: "roses",
}