// var name = "emmanuel";
// var name = "john doe";

// let name = "emmanuel";
// name = "john doe";

// const name = "emmanuel";
// const name = "john doe";

// console.log(name);

// function scope
function greet(){
    if(true){
        var x = 10;
    }
    console.log(x);
}

// greet();


// let and const is block scope
function greet2(){
    if(true){
        let x = 10;
    }
    console.log(x);
}

// greet2()

// function sayHi(name){
//     console.log("hi " + name)
// }

// sayHi("john")
// sayHi("mary")
// sayHi("peter")
// sayHi("james")

// Function expression
// const sayHi = function(name){
//     console.log("Hello " + name);
// }

// Arrow function method
// const sayHi = (name) => {
//     console.log("Hello " + name);
// }


// sayHi("mary")

// no need for braces when no parameter
const hello = () => console.log("hello");

// with one parameter, you can leave out brackets
const hi = name => consoloe.log("hi " + name);

// with two parameters, use brackets and braces
const add = (x,y) => {return x + y};

// console.log(add(1, 1));

let firstname = "emmanuel";
let email = "emma@gmail.com";
let stateOfOrigin = "Imo state";
let gender = "male";
let phoneNumber = 81234567890;
let occupation = "Web dev";

// console.log("My name is " + firstname + ", i am from " + stateOfOrigin + ", i am a " + gender + " child, and also a " + occupation + ", you can call me on this number +234 " + phoneNumber + " or on my official email: " + email);

// // Template literals using expression block (${})
// console.log(`my name is ${firstname}, i am from ${stateOfOrigin}, i am a ${gender} child, and also a ${occupation}, you can call me on this number +234 ${phoneNumber} or on my official email:${email}`);

// Destructing
let fruits = ["orange", "mango", "pear"];
// console.log(fruits[0])
let [fruit1, fruit2, fruit3] = fruits;
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)

let person = {
    name: "john",
    age: 29,
    location1: "aba"
}

// console.log(person.location)

let {name, age, location1} = person;
// console.log(name)
// console.log(age)
// console.log(location1)

// Default parameter
const sayMyName = (name="john doe")=> {
    console.log(`my name is ${name}`);
}

// sayMyName()
// sayMyName("mary")