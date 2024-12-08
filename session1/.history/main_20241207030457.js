/*
-why javaScript is invented ? 
=>adding enteractivity 
=>Client-Side Scripting
Before JavaScript, all dynamic content had to be generated on the server,
 which made web applications slow and unresponsive. 
 JavaScript enabled client-side scripting, 
 allowing browsers to handle tasks directly on the user's device without relying heavily on the server.
 lightwieght , easy to use language that complements java
 moca - live script - javascript
=> ECMA Script -> European Computer Manufacturers Association Script
=> When JavaScript was first introduced in 1995 by Netscape, Microsoft created its own version called JScript for Internet Explorer. 
This led to inconsistencies between browsers.
-linking to html : body and head
-console.log usage 

-concept of javascript  
-variables 
-data types
-operators
-comparsions with operators
-initialization,reassignment {var , let , const}
-reserved words => new , console 
-concatenation vs addition 
-naming convention
-output forms
-nan , undefined , null
-use of typeof
- = & == & ===
- alerts and prompets
- if conditions 
- && - || 

optional :
if else , if else 
*/

// console.log()
// data types : number ,string , boolean , null , undefined , typeof
// console.log(typeof 4256787643782938764372874382987382673829387n);

// // variables => (let , const , var )
// // arithmetic operations  , arithmetic presedence
// var x = 2 / 3;
// console.log(x);
// var y = 3;

// var result = x > y; //boolean
// console.log(result);
// result = y > x; //reassignment
// console.log(result);

// //concatenation => string + string
// var str1 = "date : ";
// var str2 = " is 9 decemeber.";
// //var res = str1 + str2;
// console.log(str1 + str2);

// let u = 3;
// console.log(u);
// u = 6;
// console.log(u);

// // concatenation => string & number
// var a = 5;
// var b = "10";
// console.log(a + b);
// console.log(a - b);

// // concatenation => word + variable

// var fname = "aya";

// console.log("my name is" + fname);
// console.log("my name is", fname);

// // nan (Not-a-Number)
// var t = 10;
// var s = "sec";
// console.log(t + s);
// s = "1sec";
// console.log(t + s);
// console.log(t * s);
// console.log(t - s);
// console.log(t ** s);
// let result2 = "hello" / 2; // Invalid arithmetic operation
// console.log(result2); // NaN

// // undefined
// var x1;
// console.log(x1);

// console.log("10" + 10);
// console.log("10" + "10");
// var isEqual = 10 == "10";
// console.log(isEqual);
// var isEqual2 = 10 === "10";
// console.log(isEqual2);
// // let x;
// // console.log(x); // undefined

// var user = "ayoya";
// console.log("my name is :", user);
// console.log("my name is :" + user);

// naming convention => camelCaseWriting

//null indicate "nothing" or "empty." Unlike undefined, it’s not the default value.

// prompets , alerts
// var name = prompt("enter your name");
// console.log(name);

//alert("بتعمل ايه يا عسل");

// conditional statments and logical operators

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

// var username = "ahmed";

// if (username == "aya") {
//   console.log("correct username");
// } else {
//   console.log("try again ");
// }

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
