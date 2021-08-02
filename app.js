const open = document.getElementById("open");
// const LIM = document.getElementsByClassName("modal");
const close = document.getElementById("close");
const openn = document.getElementById("openn");
// const KIM = document.getElementById("KIMM");
const closee = document.getElementById("closee");
const menuIcon = document.querySelector(".menu");
const navbar = document.querySelector(".nav-list");

open.addEventListener("click", () => {
  LIMM.classList.add("show");
});
close.addEventListener("click", () => {
  LIMM.classList.remove("show");
});
openn.addEventListener("click", () => {
  KIMM.classList.add("show");
});
opennn.addEventListener("click", () => {
  KIMM.classList.add("show");
});

closee.addEventListener("click", () => {
  KIMM.classList.remove("show");
});

// window.onclick = function (event) {
//   console.log(event.target);
//   if (event.target == LIMM) {
//     KIMM.classList.remove("show");

//     LIMM.classList.remove("show");
//   }
// };
window.onclick = function (event) {
  // console.log(event.target);
  if (event.target == KIMM || event.target === LIMM) {
    KIMM.classList.remove("show");
    LIMM.classList.remove("show");
  }
};
function goBack() {
  window.history.back();
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("menu");
});

// var LIM = document.getElementById("LIM");

// // Get the button that opens the modal
// var open = document.getElementById("LIM");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// open.onclick = function () {
//   LIM.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   LIM.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == LIM) {
//     LIM.style.display = "none";
//   }
// };

// USE href:"url here" type:"_blank" to open smth in another page , to redirect hehe
