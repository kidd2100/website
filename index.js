"use strict"
/*
  @auth Eric Cauley
*/

timer = window.setInterval(changeTitle, 50000);

function changeTitle(){
 document.getElementById("Title").innerHTML = "Website";
 if(timer){
   window.clearInterval(timer);
   timer = undefined;
 }
}
