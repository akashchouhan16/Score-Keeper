var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var h1 = document.querySelector("h1");
var numInput = document.querySelector("input");
var paragraph = document.querySelector("p");
var winningscoreDisplay = document.querySelector("#limit");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;
var resetbutton = document.querySelector("#reset");

//SCORE INCREMENTOR

p1button.addEventListener("click", player1);
function player1() {
  if (!gameover) {
    p1score++;
    if (p1score === winningscore) {
      gameover = true;
      p1display.classList.add("winner");
    }
    p1display.textContent = p1score;
  }
}

p2button.addEventListener("click", player2);
function player2() {
  if (!gameover) {
    p2score++;
    if (p2score === winningscore) {
      gameover = true;
      p2display.classList.add("winner");
    }
    p2display.textContent = p2score;
  }
}

//TO RESET SCORE.
resetbutton.addEventListener("click", resetScore);
function resetScore() {
  p1score = 0;
  p2score = 0;
  p1display.textContent = p1score;
  p2display.textContent = p2score;
  p2display.classList.remove("winner");
  p1display.classList.remove("winner");
  gameover = false;
}
function reset() {
  p1score = 0;
  p2score = 0;
  p1display.textContent = p1score;
  p2display.textContent = p2score;
  p2display.classList.remove("winner");
  p1display.classList.remove("winner");
  gameover = false;
}

numInput.addEventListener("change", function () {
  winningscoreDisplay.textContent = numInput.value;
  winningscore = Number(numInput.value);
  reset();
});
