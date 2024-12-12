// topics
// prompets , alert
// if conditons
// switch statement
// string methods => trim() , length ,
// double quotes inside dquotes
//---------------------------------------------------------------------------------------------
//alerts and prompets ----------------------------

// alert("hello from your first js project ");
// var message = prompt("what's your name ?");
// console.log(message);

// var bool = message === "aya";

// var age = 12;

// if (age >= 20) {
//   console.log("adult");
// } else if (age < 1) {
//   console.log & "invalid age ";
// } else if (age > 1 && age < 11) {
//   console.log("child");
// } else {
//   console.log("teen");
// }
//  if condition

// if--------------------------------------
// let age = 20;

// if (age >= 20) {
//     console.log("You are an adult.");
// }

// if .. else -----------------------------
// let age = 16;

// if (age >= 20) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a teen.");
// }

//  if +bool --------------------------
// // var age = 10;
// // var isTrue = age >= 20;

// if (true) {
//   console.log("adult");
// }

// var message2 = prompt("enter the score !");

// if (message2 >= 70 && message2 <= 100) {
//   console.log("excellent");
// } else if (message2 < 70 && message2 >= 50) {
//   console.log("good!");
// } else if (message2 < 0 || message2 > 100) {
//   console.log("invalid score !");
// } else {
//   console.log("failed");
// }

// if .. if else ... else ------------------
// var score = 30;
// if (score > 70) {
//   console.log("excellent");
// } else if (score >= 50) {
//   console.log("good");
// } else {
//   console.log("failed");
// }

// var attendedStudentOne = "aya";
// var attendedStudentTwo = "menna";
// var attendedStudentThree = "mahmoud";

// if (
//   attendedStudentOne === "omar" ||
//   attendedStudentTwo === "hassan" ||
//   attendedStudentThree === "seif"
// ) {
//   console.log(" aya is happy !");
// } else {
//   console.log("aya is sad");
// }

// var score2 = prompt("enter score");

// if (score2 < 50 && score2 > 0) {
//   console.log("failed");
// } else if (score2 >= 50 && score2 <= 100) {
//   console.log("success");
// } else if (score2 < 0 || score2 > 100) {
//   console.log("out of range");
// } else {
//   console.log("invalid input");
// }

// var attendedStudentOne = "aya"; ----------------------
// var attendedStudentTwo = "menna";
// if (attendedStudentOne === "kareem") {
//   console.log("aya is happy !");
// } else {
//   console.log("aya is sad");
// }
// conditional statments and logical operators ------------------------

// let isMember = false;
// let hasTicket = true;

// if (isMember || hasTicket) {
//   console.log("Welcome!");
// } else {
//   console.log("You cannot enter.");
// }

// let age = 1; ------------------------------------------
// let retirementAge = 60;
// let stillStudingAge = 22;
// let babyAge = 5;
// if (age >= retirementAge) {
//   console.log("retired !");
// } else if (age < retirementAge && age > stillStudingAge) {
//   console.log("will be retired after", retirementAge - age);
// } else if (age < stillStudingAge) {
//   console.log("still studying !");
// }

// var message = prompt("enter your score from 0 to 100 !");

// if (message <= 100 && message >= 80) {
//   alert("Grade A !");
// } else if (message >= 50 && message < 80) {
//   alert("Grade B");
// } else if (message < 50) {
//   alert("Grade C");
// } else if (message > 0 || message < 100) {
//   alert("out of range !");
// } else {
//   alert("enter a vaild number !");
// }

// var res = prompt("enter age");

// var retirementAge = 60;
// var stillStudingAge = 22;
// var babyAge = 5;

// if (res >= retirementAge && res < 90) {
//   console.log("retirement !");
// } else if (res < retirementAge && res > stillStudingAge) {
//   console.log("this years untill retirement :", retirementAge - res);
// } else if (res <= stillStudingAge && res >= babyAge) {
//   console.log("still studying");
// } else if (res < babyAge && res > 0) {
//   console.log("baby !");
// } else if (res < 0 || res > 90) {
//   console.log("invalid age");
// } else {
//   console.log("enter a vaild age !");
// }

var result = prompt(" enter the day");

switch (result) {
  case "saturday":
    alert("1st day");
    break;
  case "sunday":
    console.log("2nd day");
    break;
  case "monday":
    console.log("3rd day");
    break;
  case "tuesday":
    console.log("4th day");
    break;
  case "wednesday":
    console.log("5th day");
    break;
  case "thursday":
    console.log("6th day");
    break;
  case "friday":
    console.log("7th day");
    break;
  default:
    console.log("enter a vaild day !");
}

var num = 2;
// prompt
switch (num) {
  case 1:
    console.log("saturday");
    break;
  //
  //
  //
  //
}
// var day = "monday";
// var message2 = prompt("what day is today ?");
// switch (message2) {
//   case "saturday":
//     console.log("first day of week");
//     break;
//   case "sunday":
//     console.log("second day of week");
//     break;
//   case "monday":
//     console.log("third day of week");
//     break;
//   case "tuesday":
//     console.log("fourth day of week");
//     break;
//   case "wednesday":
//     console.log("fifth day of week");
//     break;
//   case "thursday":
//     console.log("sixth day of week");
//     break;
//   case "friday":
//     console.log("seventh day of week");
//     break;
//   default:
//     console.log("enter a valid day !");
// }

// var numOfDay = 2;

// switch (numOfDay) {
//   case 1:
//     console.log("saturday");
//     break;
//   case 2:
//     console.log("sunday");
//     break;
// }
