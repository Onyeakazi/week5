var userUsername = 0; 

// Because "" is falsy, this evaluates to false.
// if (userUsername) {
//     console.log("Welcome, " + userUsername);
// } else {
//     console.log("Error: Please enter a valid username.");
// }

var score = 28;

// if(score >= 70) {
//     console.log("You made A");
// }else if(score >= 60) {
//     console.log("You made B");
// }else if(score >= 50) {
//     console.log("You made C");
// }else if(score >= 40) {
//     console.log("You made D");
// }else if(score >= 30) {
//     console.log("You made E");
// }else{
//     console.log("you made F")
// }

var today = "monday";

// switch(today){
//     case "monday":
//         console.log("Today is monday");
//         break;
//     case "tuesday":
//         console.log("Today is tuesday");
//         break;
//     case "wednesday":
//         console.log("Today is wednesday");
//         break;
//     case "thursday":
//         console.log("Today is thursday");
//         break;
//     case "friday":
//         console.log("Today is friday");
//         break;
//     case "saturday":
//         console.log("Today is saturday");
//         break;
//     case "sunday":
//         console.log("Today is sunday");
//         break;
//     default:
//         console.log("Not a valid day of the week");
// }

// Functions
function greet(){
    console.log("good afternoon");
}

// greet();

function sayHello(name){
    return "Good afternoon " + name;
}

// console.log(sayHello("john"))
// console.log(sayHello("mary"))
// console.log(sayHello("peter"))

function add(x, y){
    return x + y;
}

// console.log(add(10, 20));

// Function expression
var multiply = function(a, b){
    return a * b;
}

// console.log(multiply(5, 5));

// LOOPS
// THE FOR LOOP
// Best used when you know EXACTLY how many times to run.
// for (var i = 1; i <= 5; i++) {
//     console.log("Processing item " + i + "...");
//     // Output: Processing item 1, Processing item 2, etc.
// }

// THE WHILE LOOP
// Best used when waiting for a condition to turn false (e.g. game loops)
var hp = 30;
// while (hp > 0) {
//     console.log("Player HP is " + hp + ". Taking 10 poison damage.");
//     hp -= 10;  // hp = hp - 10
    
//     if (hp === 0) {
//         console.log("Player Died. Game Over.");
//     }
// }

var x = 1;
// while (x <= 5){
//     console.log("x value is ", x);
//     x++;
// }


// Array
var techStack = ["HTML", "CSS", "JavaScript", "React", 10, false];

// Accessing Data
// console.log(techStack[5]); // "JavaScript"

// // Array Methods (Mutating)
techStack.push("Node.js"); // Adds to end
techStack.unshift("php"); // Adds to end
techStack.shift();  
techStack.pop();           // Removes last item ("Node.js")

// console.log(techStack)
// console.log(techStack.length); // 4

// // // Iterating over arrays (The standard way to process lists of data)
// for(var i = 0; i < techStack.length; i++) {
//     console.log("Technology #" + (i + 1) + ": " + techStack[i]);
// }


// object
var developerProfile = {
    firstName: "Alex",
    role: "Backend Engineer",
    experienceYears: 5,
    skills: ["Node.js", "MongoDB", "AWS"],
    isAvailable: true,
    
    // Objects can contain functions, known as 'Methods'
    getBio: function() {
        // 'this' refers to the object itself
        return this.firstName + " is a " + this.role + " with " + this.experienceYears + " years exp.";
    }
};
developerProfile.firstName = "John";
developerProfile.age = 30;
// delete developerProfile.firstName
// // Dot Notation Access
// console.log(developerProfile.firstName); // "Backend Engineer"
// console.log(developerProfile.role); // "Backend Engineer"
// console.log(developerProfile.skills[1]); // "MongoDB"

// console.log(developerProfile["isAvailable"])
// console.log(developerProfile)

// // Executing an object method
console.log(developerProfile.getBio());