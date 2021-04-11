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
  document.imageHeader.src = images[i];
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

var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
var img = document.querySelector('.imgveh1');

prevButton.addEventListener("click", function () {
  if (i > 0) {
    i--;
  } 
  else {
    i = imagesVehicule.length -1;
  }
  img.src = imagesVehicule[i];
});

nextButton.addEventListener("click",function () {
  if (i < imagesVehicule.length - 1) {
    i++;
  } 
  else {
    i = 0;
  }
  img.src = imagesVehicule[i];
})