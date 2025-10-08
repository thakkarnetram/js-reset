console.log(add(1,2,3))
// if i declare this add function and call it before initializing it
// it works fine
// this is known as function declaration
function add(a,b,c) {
    return a+b+c;
}

// but if i define an arrow function and try to call it before initializing
// it , it would give a ReferenceError
// console.log(subtract(2,3,4))
const subtract = (x,y,z) => {
    return x-y-z;
}

// same for this as well
// cannot call before initializing it
// this is known as function expression
const multi = function (a,b){
    return a * b;
}

// normal function by default get the this keyword binding
function divide(){
    console.log("divide",this)
}
const obj = {divide};
obj.divide()

// arrow function
const remainder = () => {
    console.log("Remainder",this)
}
const obj2 = {remainder}
obj2.remainder()
