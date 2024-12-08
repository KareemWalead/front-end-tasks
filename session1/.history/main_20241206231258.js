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

// data types
// console
console.log(4);
var x = 2;
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
var x;
console.log(x);

// let x;
// console.log(x); // undefined

//null indicate "nothing" or "empty." Unlike undefined, it’s not the default value.
