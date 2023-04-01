"use strict"
/*
  @auth Eric Cauley
*/
 
"use strict";
/*     

      Application to generate a slide show

*/
//Adding event listeners - load is when(on page load)
// Names of the image files shown in the slideshow
let imgFiles = ["trivia1.png", "trivia2.png", "trivia3.png", "trivia4.png"]

// Count of images in the slideshow
let imgCount = imgFiles.length;
window.addEventListener("load", createLightBox);

function createLightBox() {
    //lightbox container
    let lightBox = document.getElementById("lightBox");
   //parts of the lightbox
    //creating elements/nodes with in lightbox  
    let lbImages = document.createElement("div");
    let currentImg = 1;
    let timeID;
    timeID = window.setInterval(showNext, 2000);

    //design the lightbox images container
    lightbox.appendChild(lbImages);
    lbImages.id = "lbImages";

    //add images from the imgFiles array to the container
    for (let i = 0; i < imgCount; i++) {
        let image = document.createElement("img");
        image.src = imgFiles[i];
        image.alt =  [i];   
        lbImages.appendChild(image);
        }
    //function to move thru the images
    function showNext() {
        lbImages.appendChild(lbImages.firstElementChild);
        (currentImg < imgCount) ? currentImg++ : currentImg = 1;    
        }    
}


