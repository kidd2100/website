"use strict"
/*
  @auth Eric Cauley
*/

timer = window.setInterval(changeTitle, 50000);

function changeTitle(){
 var changeTitle = document.getElementById("h1");
 changeTitle.innerHTML = "Website";
 if(timer){
   window.clearInterval(timer);
   timer = undefined;
 }
}
