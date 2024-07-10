// +++++++++++++ Imediately Invoked Function Expression (IIFE) ++++++++++++++++++++++++++++++++

// used to prevent pollution happening bacause of global scope

// Normal function
function one(){
    console.log("DB CONNECTED");
}

// IFFE
(function one(){
    //named IIFE because funtion has name
    console.log("DB CONNECTED");
})(); // semicolon ';' is neccessary to stop invoked function else another IIFE will not be invoked and will display error.

((name) => {
    //unnamed IIFE because funtion does not have name. we can also pass parameter as shown
    console.log(`DB CONNECTED ${name}`);
})("knight");