var p = 7;
// var i = p + 1;
// console.log(p + 1);
for(var i =0 ; i < 5; i++){
  console.log(i);
}
// --------------
for(var a = 10; a <=21; a++){
      console.log("hello");
}

for(var i = 0; i < 8 ; i+=2){
      console.log("hi");
}

for(var i = 5; i <11 ; i++)
{
      console.log("hello there ! ?");
      console.log(i);
}
// for(var i =0 ; i <5){
//       console.log("keke")


// var kiki="";
// for(var i =1950 ; i<2025; i++){
//       kiki +="<li>"+ i +"</li>"
// }

// document.getElementById("list").innerHTML = kiki;

var cartoona = "";
for(var i=0;i<=1000;i++)
{     
      cartoona +=`<li>${i}</li>`}

// document.getElementById("list").innerHTML=cartoona;
// ===================--------
var cartoona2=""
for(var i=1800 ; i <2026 ;i++){
cartoona2= cartoona2 +`<option value="">${i} </option>`;
}
document.getElementById("listOp").innerHTML=cartoona2;

var str ="aya khaled";

// while-------
var o=0;
while(o < 5){
      console.log("hello");

      o++;

}
// var g =0;
// do{
//   console.log(g);
//   g++;
// }
// while(g < 2);

// for(var i = 100; i> 50; i--){
//       console.log(i);
// }

var a=80;
while( a > 30){
console.log(a);
      a--;
}
// infinte loop ---------------

// var y =0;
// while(y<10){
//       y=5;
//       y++;
//       console.log(y); 
// }

for(var i=0; i<21; i++){
      if(i%1==0){
            console.log(i);
      }
      else{
            console.log("odd");
      }
}
// continue  break
for(var i =0; i<10; i++){
      if(i===5){
            break;
      }
      console.log(i);
}
// حل التاسك طباعة الارقام التي تقبل القسمة علي 5
for(var i =0; i<10; i++){
      if(i% 5===0){
            console.log(i);
      }
      else{
            console.log("no");
      }
     
}
// create a list with 50 number starting from 1950 to 2000 , print in document as a select tag
for(var i = 1950 ; i<=2000 ;i++){
      console.log(i);
}
// create a reverse loop starting from 100 ending to 0 , print into an ordered list
for(var i= 100 ;i>= 0; i--){
      console.log(i);
}
// create a loop that prints odd numbers in range from 0
for(var i = 1; i<100; i+=2){
      console.log(i);
}
// anwer ather
for(var i = 1; i<100; i+=2){
      if(i%2!==0){
            console.log(i);
      }
      
}