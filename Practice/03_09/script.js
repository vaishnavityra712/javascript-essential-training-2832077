/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
        left: 26,
        right: 26,
    },
    toggleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    },
    volume_change: function(vol) {
        this.volume = vol;
    },
    newStrapLength: function(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    },
    color_backpack: function(col) {
        this.color = col
    }
};
backpack.volume_change(50)
console.log("The new volume change :", backpack.volume)

backpack.color_backpack("Pink")
console.log("New color: ", backpack.color)