/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
var x = document.querySelectorAll("h2.page-header__heading");
x[0].style.backgroundColor = "pink";

var y = document.querySelectorAll("p");
y[0].style.backgroundColor = "#ac80ed"
y[0].style.opacity = "0.5"

var z = document.querySelectorAll("main article li:last-child");
z.forEach(item => item.style.backgroundColor = "blue");
/*
forEach(item => item.style.background = "colorname") ==
var i;
for(i = 0; i < z.length; i++){
    z[i].style.backgroundColor = "colorname";
}

*/