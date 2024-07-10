const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this) //this provides current context of the system if we run it on browser it will return Window object rather than empty object.

function testThis(){
    let username = "hitesh"
    console.log(this.username); // returns undefined this only works with object

}
// testThis()

// Arrow Function
const addTwoNumber = (num1, num2) => {
    return num1 + num2
}


// Case of implicit return 
const addTwo = (num1, num2) => num1 + num2