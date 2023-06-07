// Get the container element
var activeLoop = document.getElementById("navlist");

// Get all buttons with class="btn" inside the container
var btns = activeLoop.getElementsByClassName("navLink");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

function myResNav() {
  let x = document.getElementById("navlist");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function closeMenu() {
  let exit = document.getElementById("navlist");
  if (exit.style.display === "block") {
    exit.style.display = "none";
  }
}

function darkMode() {


  const nodeList = document.querySelectorAll("*");
  for (i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.toggle("dark-mode");

}
}
