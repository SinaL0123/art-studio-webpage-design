//intro page variable
let introImg = document.querySelector("#about-pic");
let prev = document.querySelector(".left-button");
let next = document.querySelector(".right-button");

let currentState = 0; //set a counter of img

//functions to update page content (change image by clicking button)
function changeImg(direction) {
  if (direction === "prev") {
    if (currentState === 1) {
      introImg.src = "https://images.squarespace-cdn.com/content/v1/61fd778b0cb2be0c1b903334/1699651474435-OWDW7EWV0OV2NU5PBZ7L/IMG_5696.JPG?format=750w";

      currentState = 0;
      prev.style.cursor = "not-allowed";
      prev.style.color = "lightgray";
      next.style.cursor = "pointer";
      next.style.color = "lightblue";
    }

    else if (currentState === 2) {
      introImg.src = "https://images.squarespace-cdn.com/content/v1/61fd778b0cb2be0c1b903334/1699651474324-7CRK1IX75W6MV6N4HQYJ/IMG_5699.JPG?format=750w";
      currentState = 1;
      prev.style.cursor = "pointer";
      prev.style.color = "lightblue";
      next.style.cursor = "pointer";
      next.style.color = "lightblue";
    }

  } else if (direction === "next") {
    if (currentState === 0) {
      introImg.src = "https://images.squarespace-cdn.com/content/v1/61fd778b0cb2be0c1b903334/1699651474324-7CRK1IX75W6MV6N4HQYJ/IMG_5699.JPG?format=750w";
      currentState = 1;
      prev.style.cursor = "pointer";
      prev.style.color = "lightblue";
      next.style.cursor = "pointer";
      next.style.color = "lightblue";

    } else if (currentState === 1) {
      introImg.src = "https://images.squarespace-cdn.com/content/v1/61fd778b0cb2be0c1b903334/1699651475358-GM0ETKTH79MTCDP9AX5L/IMG_4513.JPG?format=750w";
      currentState = 2;
      prev.style.cursor = "pointer";
      prev.style.color = "lightblue";
      next.style.cursor = "not-allowed";
      next.style.color = "lightgray";
    }
  }
}

//determine the direction
next.addEventListener("click", function () {
  if (currentState !== 2){
  changeImg("next");}
});

prev.addEventListener("click", function () {
  if (currentState !== 0){
  changeImg("prev");}
});

// Only shadow when mouse hover
next.addEventListener("mouseover", function () {
  next.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
});

next.addEventListener("mouseout", function () {
  next.style.textShadow = "none";
});

prev.addEventListener("mouseover", function () {
  prev.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
});

prev.addEventListener("mouseout", function () {
  prev.style.textShadow = "none";
});

window.onload = function() {
    var container = document.getElementById("about-pic-container");
    var image = document.getElementById("about-pic");

    // Calculate the scrollLeft needed to center the image
    var scrollTop = (image.offsetHeight - container.offsetHeight) / 2;
    
    // Set the scrollLeft of the container
    container.scrollTop = scrollTop;
};





