"use strict";
console.log("proof of life, so that know our js is connected up.");

// comment in javascript
/**
 * multi-line comment
 * keep going
 * like this
 *
 */
//get some input from our user
// prompt is a thing we call a method 'way to do something'
//expressions end with semicolon
//when we use the key word let, javascript is going to create a space in memory to store the response.
//      = assignment operator
//     the prompt is getting assigned to the userName variable.
let userName = prompt("What is your name?");
console.log("user name: ", userName);
let confirmMessage = confirm("Do you want to continue?");
console.log("confirm message: ", confirmMessage);
let userTime = prompt("What time is it, use Military time. But just first two digits.");
console.log("Military time: ", userTime);

//process that information given to us from the user
//if else conditional and 
// if(condition is true or false){
//     do this
// } else if(condition is true or false){
//     do this
// } else if(condition is true or false){
//   do this
// }else {
// do this last one
// }

//conditional logic
let todaysDate = new Date();
console.log("Date: ", todaysDate);

let hourNow = todaysDate.getHours();

let greeting;

console.log("what time is it now.", hourNow);
if (userTime > 18 && userTime < 24) {
  greeting = "Good Evening";
} else if (userTime > 12 && userTime < 18) {
  greeting = "Good Afternoon";
} else if (userTime > 6 && userTime <= 12) {
  greeting = "Good Morning!";
} else {
  greeting = "Go to BED!";
}
console.log("Welcome, and ", greeting);

document.write("Hello " + userName + " " + greeting);

// out put that information that was asked for or, just notify them of something.
if(baseBallTeam === 'Cubs'){
  greeting = 'Yes this is the best team ever!';
}