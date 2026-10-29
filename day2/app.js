
var score = 70;

// if(score){
//     console.log("You scored: " + score);
// }else{
//     console.log("You failed!");
// }

// if(score >= 75){
//     console.log("You made A");
// }else if(score >= 70){
//     console.log("You made B");
// }else if(score >= 60) {
//     console.log("You made C");
// }else if(score >= 50) {
//     console.log("You made D");
// }else if(score >= 40){
//     console.log("You made E");
// }else {
//     console.log("You made F");
// }

// var x = 10;
// var y = "10";

// console.log(x == y)  // loose equality
// console.log(x === y) // strict equality

// Switch statement
var today = "Thursday";

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
//         console.log("Not a valid day of the week.");
//         break;
// }

// Function
function greet(){
    console.log("Good morning!");
}

// greet();

function goodMorning(name){
    console.log("Good morning " + name)
}

// goodMorning("ramsey");
// goodMorning("favour");
// goodMorning("john doe");

function add(x, y){
    return x + y;
}

// console.log(add(5, 5));
// console.log(add(10, 5));
// console.log(add(10, 50));

// Function expression
var sayHello = function(name = "john"){
    return "Hello friend, " + name;
}

// console.log(sayHello());
// console.log(sayHello("mary"));

// THE FOR LOOP
// Best used when you know EXACTLY how many times to run.
for(var i = 1; i <= 10; i++){ // i = i + 1
    // console.log(i)
}

// While
// Best used when waiting for a condition to turn false (e.g. game loops)
var life = 100;
// while(life > 0){
//     console.log("Avatar life is: ", life);
//     life -= 10; // life = life - 10
    
//     if(life == 0){
//         console.log("Avatar died! 🥹");
//     }
// }


// Array
var array = ["mango", "orange", "pear"];

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array.length)

array.push("banana");
array.unshift("guava");
array.pop();
array.shift();
// console.log(array)
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// Objects
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

// console.log(developerProfile.firstName); // dot notation
// console.log(developerProfile["role"]); // bracket notation
developerProfile.secondName = "mary";
developerProfile.firstName = "John doe";
delete developerProfile.isAvailable;

console.log(developerProfile.getBio())