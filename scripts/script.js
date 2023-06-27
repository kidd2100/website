/*
Author: Eric Cauley
Date: 06/26/2023
File Name: script.js
*/

//Hamburger Menu Functions

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("wds-logo");

    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}