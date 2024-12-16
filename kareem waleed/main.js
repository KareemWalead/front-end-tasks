// topics
//  prompets , alert
// if conditions
// switch statement
// string methods => trim() , length ,
// double quotes inside dquotes
// ------------------------
// alerts and prompets ------
// alert            يعني نبه وظيفتها انها تنبهني بالرسالة

alert("hello from your first js project");
var massage = prompt("whats your name ?");
// console.log(massage);
// if (massage === "kareem")
// {
//     console.log("hello kareem")
// }
// else{
//     console.log("someone else");
// }
// --------------------------
// 
// if(true){
//     console.log("hello , kareem")
// }

var age =12;
if(age >= 20){
    console.log("adult");
}
else if(age < 1){
    console.log("invalid age");
}
else if(age > 1 && age<11){
    console.log("child");
}
else{
    console.log("teen");
}
// -------------------
// var massage2 =prompt("enter the score !");
// if(massage2 >= 70 && massage2 <= 100){
//     console.log("excellent");
// }
// else if(massage2 < 70 && massage2 >=50){
//     console.log("good!")
// }
// else if(massage2 <0 || massage2 > 100) {
// console.log("invalid score !")
// }
// else{
//     console.log("failed")
// }
// -------------------
var attendedStudentOne = "aya";
var attendedStudentTwo ="menna";
var attendedStudentThree ="mahmoud";

if(attendedStudentOne === "omar" ||
     attendedStudentTwo=="hassan" ||
      attendedStudentThree==="seif"){
  console.log("aya is happy !")
}
else{
    console.log("aya is sad")
}

// =================
// var degree=prompt("enter the degree");
// if(degree >=50){
//     console.log("successful")
// }
// else if(degree<50){
//     console.log("failed")
// }
// --------------
// var score2 =prompt("enter score");
// if(score2 < 50 && score2 >0){
//       console.log("failed");}
//       else if(score2 >= 50 && score2 <=100){
//         console.log("success");
//       }
//       else if (score2 <0|| score2 > 100){
//         console.log("out of range");
//       }
//       else{
//         console.log("invalid input")
//       }
// --------------------------------------------
// let isMember =false;
// let hasTicket=true;

// if(isMember || hasTicket){
//     console.log("welcome!");
// }
// else{
//     console.log("you cannot enter.")
// }
// ---------------------
// var res =prompt("enter age")
// var retirementAge =60;
// var stillStudingAge=22;
// var babyAge =5;

// if(res >= retirementAge  && res <90){
//     console.log("retirement !")
// }
// else if(res < retirementAge && res > stillStudingAge){
//     console.log("this years untill retirement !", retirementAge -res)
// }
// else if(res <= stillStudingAge && res >= babyAge){
//     console.log("still studying");
// }
// else if( res < babyAge && res > 0){
//     console.log("baby !")
// }
// else if(res < 0|| res >90){
//     console.log("invalid age")
// }
// else{
//     console.log("enter a vaild age !");
// }
// --------------------------
var result=prompt("enter the day")
switch(result){
    case"saturday":
      alert("1st day");
      break;
case"sunday":
      console.log("2nd day");
      break;
case"monday":
     console.log("3rd day");
     break;
case"teusday":
     console.log("4th day");
     break;
case"wensday":
     console.log("5th day");
     break;
case"thursday":
     console.log("6th day");
     break;
case"friday":
     console.log("7th day");
     break;
     default:
        console.log("enter a vollid day")
}
// -----------------------------------
var num =2;

switch(num){
    case 1:
        console.log("saturday");
        break;
    case 2:
        console.log("sunday");
        break;
    case 3:
        console.log("monday");
        break;
    case 4:
        console.log("teusday");
        break;
    case 5:
        console.log("wensday");
        break;
    case 6:
        console.log("thursday");
        break;
    case 7:
        console.log("friday");
        break;                
}
// ----------------------------
var result=prompt("enter the day")
switch(true){
case age ==12 || age > 15:
      alert("1st day");
      break;
case"sunday":
      console.log("2nd day");
      break;
case"monday":
     console.log("3rd day");
     break;
case"teusday":
     console.log("4th day");
     break;
case"wensday":
     console.log("5th day");
     break;
case"thursday":
     console.log("6th day");
     break;
case"friday":
     console.log("7th day");
     break;
     default:
        console.log("enter a vollid day")
}
