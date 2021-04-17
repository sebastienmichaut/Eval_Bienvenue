// ------------ image du header -----------

var i = 0;
var images = [
  "/images/background.jpg",
  "/images/background1.jpg",
  "/images/background2.jpg",
  "/images/background3.jpg",
  "/images/background4.jpg",
];
var time = 7000;

function changeImg() {
  document.querySelector('#imagesHeader').src = images[i];
    if (i < images.length - 1) {
      i++;
    }  else {
      i=0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;

// -------------- carrousel ----------------


var imagesVehicule = [
  "/images/vehicule1.png",
  "/images/vehicule2.png",
  "/images/vehicule3.png",
  "/images/vehicule4.png",
];

let prevButton = document.querySelectorAll(".prev");
let nextButton = document.querySelectorAll(".next");
let image1 = document.querySelector(".imgveh1");
let image2 = document.querySelector(".imgveh2");
let image3 = document.querySelector(".imgveh3");
let image4 = document.querySelector(".imgveh4");
let carrousel1 = document.querySelector('.carrousel1')
let carrousel2 = document.querySelector(".carrousel2");
let carrousel3 = document.querySelector(".carrousel3");
let carrousel4 = document.querySelector(".carrousel4");

for (var i = 0; i < prevButton.length; i++) {
  prevButton[i].addEventListener("click", function () {
    if (this.parentNode.parentNode == carrousel1) {
      if (i > 0) {
        i--;
      } else {
        i = imagesVehicule.length - 1;
      }
      image1.src = imagesVehicule[i];
    } else if (this.parentNode.parentNode == carrousel2) {
      if (i > 0) {
        i--;
      } else {
        i = imagesVehicule.length - 1;
      }
      image2.src = imagesVehicule[i];
    } else if (this.parentNode.parentNode == carrousel3){
      if (i > 0) {
        i--;
      } else {
        i = imagesVehicule.length - 1;
      }
      image3.src = imagesVehicule[i];
    } else if (this.parentNode.parentNode == carrousel4){
      if (i > 0) {
        i--;
      } else {
        i = imagesVehicule.length - 1;
      }
      image4.src = imagesVehicule[i];
    }
  });
}


for (var i = 0; i < nextButton.length; i++) {
  nextButton[i].addEventListener("click", function () {
    if (this.parentNode.parentNode == carrousel1) {
      if (i < imagesVehicule.length - 1) {
        i++;
      } else {
        i = 0;
      }
      image1.src = imagesVehicule[i];
    } else if (this.parentNode.parentNode == carrousel2) {
      if (i < imagesVehicule.length - 1) {
        i++;
      } else {
        i = 0;
      }
      image2.src = imagesVehicule[i];
    } else if (this.parentNode.parentNode == carrousel3) {
      if (i < imagesVehicule.length - 1) {
        i++;
      } else {
        i = 0;
      }
      image3.src = imagesVehicule[i];
    } else if (this.parentNode.parentNode == carrousel4) {
      if (i < imagesVehicule.length - 1) {
        i++;
      } else {
        i = 0;
      }
      image4.src = imagesVehicule[i];
    }
  });
}