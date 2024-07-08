/* Two types 
1. Stack(uused for Primitive Datatypes).We get copy of value in Stack
2. Heap(used for Non-Primitive Datatypes).We get memory reference of vaslue in Heap
*/


//1.Stack(Only of value is changed not the original value)

let myName = "XYZ Singh"
let anotherName = myName

anotherName = "Singh XYZ"

console.log(myName);
console.log(anotherName);

//2. Heap(here on making change in value obtained by reference, the original value gets changed)

let userOne = {
    email: "userone@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email="userTwo@email.com"

console.log(userOne.email);