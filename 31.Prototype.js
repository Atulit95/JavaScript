let myName = "hello     "

console.log(myName.length);
// we need to create new method named 'trueLength' which gives actual length os String.

let myHero = ["SpiderMan", "IronMan"]

let heroPower = {
    spiderman: "Sling",
    Ironman: "tech",

    getSpiderPower: function() {
        console.log(`SpidyPower id ${this.spiderman}`);
    }
}

Object.prototype.hello = ()=>{
    console.log("Hello 'hello' is present here");
}

Array.prototype.hello2 = ()=>{
    console.log("Hello 'hello2' is present here");

}

// heroPower.hello2()
myHero.hello2()

// Inheritance

const User = {
    name: "hello",
    email: "hello@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "hello     "
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`)
}
anotherUsername.truelength()
"helloUser          ".truelength()