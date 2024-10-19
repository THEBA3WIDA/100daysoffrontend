let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let mainimg = document.getElementById("image");
img1.addEventListener("click", function () {
  mainimg.style.backgroundImage = `url("burgir1.jpg")`;
  mainimg.style.backgroundSize = `cover`;
  mainimg.style.backgroundPosition = `center`;
  console.log("hello");
});

img2.addEventListener("click", function () {
  mainimg.style.backgroundImage = `url("burgir2.jpg")`;
  mainimg.style.backgroundSize = `cover`;
  mainimg.style.backgroundPosition = `center`;
  console.log("hello");
});

img3.addEventListener("click", function () {
  mainimg.style.backgroundImage = `url("burgir3.jpg")`;
  mainimg.style.backgroundSize = `cover`;
  mainimg.style.backgroundPosition = `center`;
  console.log("hello");
});
