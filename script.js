var circle = document.getElementById("phone");
var up = document.getElementById("up");
var down = document.getElementById("down");
var overlay = document.getElementById("overlay");

var rotationValue = circle.style.transform;
var rotationSum;

up.onclick = function () {
  rotationSum = rotationValue + "rotate(-90deg)";
  circle.style.transform = rotationSum;
  rotationValue = rotationSum;
};

down.onclick = function () {
  rotationSum = rotationValue + "rotate(90deg)";
  circle.style.transform = rotationSum;
  rotationValue = rotationSum;
};
