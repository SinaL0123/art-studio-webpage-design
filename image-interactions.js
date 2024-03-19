
// homepage variable
let images = document.querySelectorAll(".image-container>a>img");
console.log(images);
let titles = document.querySelectorAll(".image-text")

//functions to change a CSS property (opacity)
function changeOpacity(){
    for (var i = 0; i < images.length; i++) {
        images[i].style.opacity = "0.5";
        images[i].nextElementSibling.style.color = "gray";//change the text color to gray along with the image
      }
    this.style.opacity = '1';
    this.nextElementSibling.style.color = "white";
    } 

function resetOpacity() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.opacity = "1";
        images[i].nextElementSibling.style.color = "white"; //reset the text color to white
      }
    }


// event listeners for hover on
for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", changeOpacity);
}

// event listeners for hover off
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseout", resetOpacity);
}
