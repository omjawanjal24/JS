// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreVlaue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3434567892345678n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj ={
    name: "OM",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}
 
console.log(typeof anotherId);

// https://262.ecms-international.org/5.1/#sec-11.4.3