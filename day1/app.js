// console.log("Welcome to js class");

// Warnings (Shows up yellow with a warning icon)
// console.warn("data fetch having issues");

// Errors (Shows up red with a stack trace)
// console.error("Data failure");

// Tables (Incredible for visualizing arrays/objects)
// console.table(["React", "Angular", "Vue", "Svelte"]);

// Variables
var name = "Ramsey"; //Strings
var colleague = 'Favour'; //Strings
var date = 27; // Number
var num1 = "200";
var isLoggedIn = false; //boolean
var address; // undefined
var price = null; // null
var skill = "Javascript";
var today = "Tuesday";

// + concatenation
// console.log("My name is " + name + ", i and my colleague " + colleague + " we are learning " + skill + " today being " + today + " on the " + date + "th of octobar");

var x = 10;
var y = "10";

console.log(x == y); // loose equility
console.log(x === y); // strict equility

// Logical AND (&&)
var age = 18;
var hasTicket = true;
var vipPass = false;

// NOT (!) the negator
var enterClub = (age >= 18) && hasTicket && !vipPass;
console.log("Can individual enter: ", enterClub);

var isToxicated = false;
var driverLiscense = true;
var hasCar = false;

var canDrive = isToxicated || driverLiscense || hasCar;

console.log("Can individual drive now: ", canDrive);

var a = 10;
var b = 25;

var sum = a + b;
var difference = a - b;
var product = a * b;
var quoitent = a / b; //division
var mod = b % a; 

// console.log(mod);

// try/catch
try{
    console.log(mod);
}catch(err){
    console.error("Error: ", err)
}finally{
    console.log("Execution complete");
}