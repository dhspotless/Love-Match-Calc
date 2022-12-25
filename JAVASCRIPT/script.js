// WRONG
// let a = 3

// let b = 8

// console.log(`A is ${a} `) + 5
// console.log(`B is ${b} `) - 5

// let a = 3
// let b = 8

// let c = a
// a = b
// b = c

// console.log(a)
// console.log(b)
// write code to create an element?

// let myName = "dhspotless";
// document.querySelector("h1").textContent = myName.slice(0, 2);

// let userTweet = prompt("Compose your tweet here");

// let userTweetUnder140 = userTweet.slice(0, 140);

// console.log(userTweetUnder140);

// SHORTER VERSION
// console.log(prompt("compose your tweet here").slice(0, 140));

// RETURNING USER FIRST VALUE WITH CAP STARTS HERE

// let myName = prompt("what is your name");
// let restOfTheName = myName.slice(1, myName.length);
// restOfTheName = restOfTheName.toLowerCase();
// myName = " Hello, " + myName.slice(0, 1).toUpperCase() + restOfTheName;
// document.querySelector("h3").textContent = myName;
// RETURNING USER FIRST VALUE WITH CAP ENDS HERE

// FUCNTIONS STARTS HERE
// function callMyName() {
//   console.log("hey babe");
// }
// callMyName();

// function callName(name, number) {
//   console.log(`hey ${name} can i have your ${number}`);
// }
// callName("Ebuka", 21);

// let callMe = () => {
//   console.log("am with you");
// };
// callMe();

// function getMilk(Money) {
//   console.log("Leave the House");
//   console.log("Move Right");
//   console.log("Move Right");
//   console.log("Move Up");
//   console.log("Move Up");
//   console.log("Move Up");
//   console.log("Move Up");
//   console.log("Move RIght");
//   console.log("Move Right");
//   let numberOfBottles = Math.floor(Money / 1.5);

//   console.log(`Buy Me ${numberOfBottles} Bottles Of Fresh Milk`);
//   console.log("Move Left");
//   console.log("Move Left");
//   console.log("Move Down");
//   console.log("Move Down");
//   console.log("Move Down");
//   console.log("Move Down");
//   console.log("Move Left");
//   console.log("Move Left");
//   console.log("EnterHouse");
// }
// getMilk(5);
// age left cheaker starts here
// function lifIneWeeks(age) {
//   let name = prompt("what is your name");
//   let yearsRemaining = 100 - age;
//   let days = yearsRemaining * 365;
//   let weeks = yearsRemaining * 52;
//   let months = yearsRemaining * 12;
//   alert(
//     `Hello ${name}, You Have ${days} days ${weeks} weeks, ${months} months left, Please Use them Wisely 🥺`
//   );
// }
// lifIneWeeks(prompt("How old are u"));
// age left checker ends here

// FUCNTIONS ENDS HERE

// function getMilk(money) {
//   return money * 20;
// }
// let result = (document.querySelector("h3").textContent = getMilk(
//   prompt("how many?")
// ));

// gave robot 10 dollars
// bottle of milk cost 1.5 dollars
// modify your function to calculate how many bottles the robot could buy

// BMI CALCULATOR STARTS HERE
// write bmi calculator code?

// function bmiCalculator(weight, height) {
//   let bmi = weight / Math.pow(height, 2);

//   return Math.round(bmi);
// }
// let bmi = bmiCalculator(65, 1.8);

// alert(bmi);

// function bmiClc(weight, height) {
// //   let bmi = weight / Math.pow(height, 2);
// //   return Math.round(bmi);
// // }

// // alert(bmiClc(65, 1.8));
// BMI CALCULATOR ENDS HERE

// RANDOM STARTS HERE

/* DIFFERENNCE BETWEEN  === AND == THE THREE EQUAL SIGN === CHECKS FOR BOTH THE  DATA TYPE AND EQUALITY WHILEST THE DOUBLE EQUAL SIGN CHECK ONLY FOR EQUALITY */

function loveCalc() {
  let yourName = prompt("what is your name?");
  let theirName = prompt("what is their name?");

  let MatchScore = Math.random() * 100;
  MatchScore = Math.floor(MatchScore) + 1;

  if (MatchScore === 100) {
    alert(
      `Hello ${yourName}, your Match Score is ${MatchScore}% you and ${theirName} are ment for each other`
    );
  }
  if (MatchScore > 30 && MatchScore <= 70) {
    alert(`Hello ${yourName}, Your Match Score is ${MatchScore}%`);
  }
  if (MatchScore <= 30) {
    alert(
      `Hello ${yourName}, your Match Score is ${MatchScore}% You both are like oil and water`
    );
  } else {
    alert(`Hello ${yourName}, your Match Score is ${MatchScore}% `);
  }
}
loveCalc();
