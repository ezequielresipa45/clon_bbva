const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("actives", window.scrollY > 0);
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var button = document.getElementById("slide");
    var buttonBack = document.getElementById("back");

    buttonBack.onclick = function () {
      document.getElementById("container").scrollLeft -= 204;
    };

    button.onclick = function () {
      document.getElementById("container").scrollLeft += 204;
    };
  },
  false
);
