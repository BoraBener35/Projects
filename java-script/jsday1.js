// declare variables (left and const)
x = 7;    //declared a variable
const names = ['Jaqueline', 'Amy', 'Sunil'];  // declared a constant

//let and const are scope sensitive

//variable types
let name = "William";

let isfinished = false;

let avg = 87.9;

let test = 3/2;

let test2 = 3 % 2;

x = '7';

// null vs undefined

let sample = null;
let sample2;
// console.log(sample3); gives error and  states it is undefined

//typeof null => Object
//typeof 7 => Number
//typeof 'hi' => string
//typeof Array() => Object

// ternary operator

let x;
let iseven;

if(x%2==0)
    iseven = true;
else
    iseven = false;
iseven = (x % 2 == 0) ? true : false;

// 10 or more is yellow
//20 or more is red 
// otherwise green

let colour = (x>20)? 'red' : (x>10)?'yellow' : 'green';

//functions

function nameOfFunction(x,y) {
    return x + y;
}


//loops and arrays

for (let i; i < names.length; i++){
    console.log(names[i]);
}


for (let name of name) {
    console.log(name);
}



