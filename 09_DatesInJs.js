// Dates

let myDate = new Date();
// console.log(myDate.toString());//=> Tue Jul 09 2024 19:54:32 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//=> Tue Jul 09 2024
// console.log(myDate.toISOString());//=> 2024-07-09T14:27:36.828Z
// console.log(myDate.toJSON());//=> 2024-07-09T14:27:36.828Z
// console.log(myDate.toLocaleString());//=> 7/9/2024, 7:57:36 PM

let myCreatedDate = new Date(2024, 0, 24)
// console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2024, 0, 24, 5, 3)
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// how to get value in seconds
console.log(Math.floor(myTimeStamp/1000));// floor is used because it returns value in decimal when divided by 1000

let newDate = new Date()
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());

// how to customise our date using toLocaleString()
newDate.toLocaleString('default' ,{
    weekday: "long"
})