// console.log("first day learning JS")

// // Warnings (Shows up yellow with a warning icon)
// console.warn("Memory limits approaching...");

// // Errors (Shows up red with a stack trace)
// console.error("CRITICAL: Database connection failed.");

// // Tables (Incredible for visualizing arrays/objects)
// console.table(["React", "Angular", "Vue", "Svelte"]);

// VARIABLEs
var name = "victory";
var colleague = "Kosi";
var today = "monday";
var course = "Javascript";

// Undefined
var number;

// NULL
var currentDiscount = null;

// console.log(name);
// console.log(colleague);
// // Concatenation (+)
// console.log("Today is " + today + ", and my name is " + name + ", my colleague " + colleague + " and i we are learning " + course);
// console.log(typeof name)

// OPERATORS, EXPRESSIONS & COERCION
var x = 10;
var y = "10";

// console.log(x == y);  //loose equality
// console.log(x === y); //strict equality


var age = 25;
var hasLicense = true;
var isIntoxicated = false;

// AND (&&) - All conditions must be true
var canRentCar = (age >= 21) && hasLicense && !isIntoxicated; 
// console.log("Can rent car: " + canRentCar); // true

// OR (||) - Only one condition needs to be true
var hasVIPPass = false;
var hasTicket = true;
var canEnterClub = hasVIPPass || hasTicket; 
// console.log("Can enter: " + canEnterClub); // true

// Mathematical expressions (+, -, *, /, %)

var a = 10;
var b = 20;

var sum = a + b;
// var sum = a - b;
// var sum = a - b;
// var sum = a - b;
// var sum = a % b;


try{
    console.log(sum);
}catch(err){
    console.log("error " + err);
}finally{
    console.log("Expression finished!");
}
