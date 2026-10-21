var score = 29;

// the IF statement
// if(score >= 70){
//     console.log("You made A");
// }else if(score >= 60){
//     console.log("You made B");
// }else if(score >= 50){
//     console.log("You made C");
// }else if(score >= 40){
//     console.log("You made D");
// }else if(score >= 30){
//     console.log("You made E");
// }else{
//     console.log("You made F");
// }

// Switch statement
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
//         console.log("Not a valid day of the week.");
//         break;
// }

// FUNCTION SCOPE
// function greet(){
//     console.log("Good morning");
// };
// greet();

function greet(name){
    console.log("Good morning " + name);
};

// greet("John doe");
// greet("mary doe");
// greet("peter andrew")

function add(x, y){
    return x * y;
}
// console.log(add(5, 5));


// FUNCTION EXPRESSION
var total = function(num1, num2){
    return num1 + num2;
}

// console.log(total(10, 70))


// THE FOR LOOP
// Best used when you know EXACTLY how many times to run.
for(var i = 1; i <= 10; i++){ //i = i + 1
    // console.log(i)
}

// THE WHILE LOOP
// Best used when waiting for a condition to turn false (e.g. game loops)
var life = 100;

// while(life > 0){
//     console.log("Avatar life is " + life);
//     life -= 20;

//     if(life == 0){
//         console.log("Game end");
//     } 
// }

// var i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// Arrays
var fruits = ["mango", "Paw-paw", "orange"];

fruits.push("guava");
fruits.unshift("watermelon");
fruits.pop();
fruits.shift();

// console.log(fruits.length)
for(var i = 0; i < fruits.length; i++){
    // console.log(fruits[i])
}

// OBJECTS
var person = {
    name: "John doe",
    age: 27,
    skills: ["Html", "css", "Javascript"],
    exp: 5,
    getBio: function(){
        console.log("My name is " + this.name + ", i am " + this.age + " years old, " + " with " + this.exp + "+ years of exprience");
    }
}

console.log(person.name) //dot notation
console.log(person["age"]) //bracket notation
console.log(person.exp)
console.log(person.getBio())