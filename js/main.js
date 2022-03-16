var all = document.querySelector("#pills-home-tab");
var print = document.querySelector("#pills-profile-tab");
var web = document.querySelector("#pills-contact-tab");
var ill = document.querySelector("#pills-ill-tab");
var media = document.querySelector("#pills-media-tab");
var craft = document.querySelector("#pills-craft-tab");

var mainNav = document.getElementById("#product__thumb");
var listNav = document.getElementsByTagName("li");

var cart1 = document.querySelector(".cart-1");
var cart2 = document.querySelector(".cart-2");
var cart3 = document.querySelector(".cart-3");
var cart4 = document.querySelector(".cart-4");
var cart5 = document.querySelector(".cart-5");
var cart6 = document.querySelector(".cart-6");
var cart7 = document.querySelector(".cart-7");
var cart8 = document.querySelector(".cart-8");

all.addEventListener("click", function () {
  for (var i = 0; i < listNav.length; i++) {
    var current = document.querySelector("#product__thumb  .none");
    current.className = current.className.replace("none", "");
  }
});

print.addEventListener("click", function () {
  for (var i = 0; i < listNav.length; i++) {
    var current = document.querySelector("#product__thumb  .none");
    if (listNav[i].classList.contains("none")) {
      current.className = current.className.replace("none", "");
    }
  }
  cart1.classList.add("none");
  cart5.classList.add("none");
  cart6.classList.add("none");
  cart7.classList.add("none");
});

web.addEventListener("click", function () {
  for (var i = 0; i < listNav.length; i++) {
    var current = document.querySelector("#product__thumb  .none");
    if (listNav[i].classList.contains("none")) {
      current.className = current.className.replace("none", "");
    }
  }
  cart1.classList.add("none");
  cart4.classList.add("none");
  cart6.classList.add("none");
  cart7.classList.add("none");
});

ill.addEventListener("click", function () {
  for (var i = 0; i < listNav.length; i++) {
    var current = document.querySelector("#product__thumb  .none");
    if (listNav[i].classList.contains("none")) {
      current.className = current.className.replace("none", "");
    }
  }
  cart2.classList.add("none");
  cart3.classList.add("none");
  cart4.classList.add("none");
  cart5.classList.add("none");
  cart6.classList.add("none");
});

media.addEventListener("click", function () {
  for (var i = 0; i < listNav.length; i++) {
    var current = document.querySelector("#product__thumb  .none");
    if (listNav[i].classList.contains("none")) {
      current.className = current.className.replace("none", "");
    }
  }
  cart1.classList.add("none");
  cart3.classList.add("none");
  cart6.classList.add("none");
  cart7.classList.add("none");
});

craft.addEventListener("click", function () {
  for (var i = 0; i < listNav.length; i++) {
    var current = document.querySelector("#product__thumb  .none");
    if (listNav[i].classList.contains("none")) {
      current.className = current.className.replace("none", "");
    }
  }
  cart1.classList.add("none");
  cart2.classList.add("none");
  cart3.classList.add("none");
  cart4.classList.add("none");
  cart5.classList.add("none");
  cart6.classList.add("none");
});

// GO UP BUTTON

var mybutton = document.getElementById("button__top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "none";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// MODAL VIDEO

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// MOUSE SCROLL AIM TO CHANGING HEADER'S HEIGHT
// WHEN SCROLL DOWN THE PAGE => HEADER'S HEIGHT GET SMALLER => LEAD TO 'MASSIVE PICTURE' ALSO BECOME SMALLER

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").classList.add("header__moving");
  } else {
    document.querySelector("header").classList.remove("header__moving");
  }
};
