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

optional :
if else , if else 
*/

// console.log()
// data types : number ,string , boolean , null , undefined , typeof
console.log(typeof 4256787643782938764372874382987382673829387n);

// variables => (let , const , var )
// arithmetic operations  , arithmetic presedence
var x = 2 / 3;
console.log(x);
var y = 3;

var result = x > y; //boolean
console.log(result);
result = y > x; //reassignment
console.log(result);

//concatenation => string + string
var str1 = "date : ";
var str2 = " is 9 decemeber.";
//var res = str1 + str2;
console.log(str1 + str2);

let u = 3;
console.log(u);
u = 6;
console.log(u);

// concatenation => string & number
var a = 5;
var b = "10";
console.log(a + b);
console.log(a - b);

// concatenation => word + variable

var fname = "aya";

console.log("my name is" + fname);
console.log("my name is", fname);

// nan (Not-a-Number)
var t = 10;
var s = "sec";
console.log(t + s);
s = "1sec";
console.log(t + s);
console.log(t * s);
console.log(t - s);
console.log(t ** s);
let result2 = "hello" / 2; // Invalid arithmetic operation
console.log(result2); // NaN

// undefined
var x1;
console.log(x1);

console.log("10" + 10);
console.log("10" + "10");
var isEqual = 10 == "10";
console.log(isEqual);
var isEqual2 = 10 === "10";
console.log(isEqual2);
// let x;
// console.log(x); // undefined

var user = "ayoya";
console.log("my name is :", user);
console.log("my name is :" + user);

// naming convention => camelCaseWriting

//null indicate "nothing" or "empty." Unlike undefined, it’s not the default value.

// prompets , alerts
// var name = prompt("enter your name");
console.log(name);

//alert("بتعمل ايه يا عسل");

//
