var name = "victory";
var name = "kosi";

// Var, let and const
// const accountNumber = 100;
// const accountNumber = 200;

// console.log(accountNumber * 2);

// function scope
function add1(){
    if(true){
        var x = 10;
    }
    console.log(x)
}

// Block scope
function add(){

    if(true){
        let x = 10;
        console.log(x)
    }
}

// add1();
// add();

// Arrows function
const greet = function(){
    console.log("Good morning")
}

greet();

const greet2 = () => {
    console.log("Good morning")
}

// No parameter: must include empty parenthesis
const greet3 = () => console.log("Good day");

// one parameter: parenthesis is optional
const add2 = a => a + 1;

// 2 or more parameters: must include parenthesis
const add3 = (x, y) => x * y;
// console.log(add3(1, 2));

// Template literals
let firstName = "victory";
let skill = "Javascript";
let loc = "owerri";

// console.log("My first name is " + firstName + ", i am learning " + skill + ", and i live in " + loc);

// console.log(`my name is ${firstName}, i am learning ${skill} and i live in ${loc}`);


// Array destructuring
let arr = ["mango", "orange", "pear", "apple"];

let [fruit1, fruit2, fruit3, fruit4] = arr;

// console.log(fruit1);

// Object destructuring
let person = {
    secondName: "john",
    friend: "samuel",
    age: 20,
    hobby: ["dancing", "coding", "etc"]
}

let {secondName, friend, age, hobby} = person;

let [hb1, hb2, hb3] = person.hobby;

console.log(secondName)
console.log(friend)
console.log(hb1)

// console.log(person.age) // dot notation
// console.log(person["name"]) // bracket notation