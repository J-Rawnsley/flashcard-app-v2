// use some variation of this code to split the input into an  array of separate words wither by spaces or newlines

var string = "x y\nx1 y1\nx2 y2";
var array = string.match(/[^\s]+/g);

console.log(array); 