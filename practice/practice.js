let Rock = document.getElementById("Rock");
let Paper = document.getElementById("Paper");
let Scissors = document.getElementById("Scissors");
let user = document.getElementById("user");
let computer = document.getElementById("computer");
let result = document.getElementById("result");
Rock.addEventListener("click", function () {
  console.log("Rock is clicked");
  let a = Math.floor(Math.random() * 3); // 0 1 2
  user.innerHTML = "Rock";
  if (a === 0) {
    computer.innerHTML = "Rock";
    result.innerHTML = "Tied";
  } else if (a === 1) {
    computer.innerHTML = "Paper";
    result.innerHTML = "You lost";
  } else if (a === 2) {
    computer.innerHTML = "Scissors";
    result.innerHTML = "You won";
  }
});

Paper.addEventListener("click", function () {
  console.log("Paper is clicked");
  user.innerHTML = "Paper";
});

Scissors.addEventListener("click", function () {
  console.log("Scissors is clicked");
  user.innerHTML = "Scissors";
});
