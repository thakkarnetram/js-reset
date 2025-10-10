const arr = [1,2,3]
const [a,b,c] = arr
console.log(a,b,c)

const [,second]=arr // takes the 1st element i.e 0,1
const [,,third]=arr // takes the 2nd element i.e 0,1,2
console.log(second)
console.log(third)

// takes the first element and then the spread operator collects the remaining elements
const [first,...remaining] = arr
console.log(first,remaining)


// Object destructuring
const obj1 = {name:"Idk",age:22,role:"idk"};
const{name,age,role} = obj1;
console.log(name,age,role)
console.log(obj1)

// rename var
const {name:userName} = obj1;
console.log(userName)

// add values
const {city="n/a"} = obj1;
console.log(city)

// copying array
// wrong method as arr2 is redundant as it points to the same array
const arr1 = [2,4,56]
const arr2 = arr1
console.log(arr2)

// this is the correct way using spread operator as it creates
// a second copy of the same array
const arr3= [1,2,3]
const arr4 = [...arr3]
console.log(arr4)
