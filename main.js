debugger
const words = ["panda", "cola", "code", "computer"];
const startBtn = document.querySelector(".start");
let word = "";
let guessed = [];
let wrongGuesses = 0;

function displayWord() {
  const display = word
    .split("")
    .map((letter) => (guessed.includes(letter) ? letter : "_"))
    .join(" ");
  document.getElementById("display-word").textContent = display;
}
function imgChange() {
  const img = document.getElementById("img");
  img.src = `./image/hangman-${wrongGuesses}.svg`;
}
function updateStatus() {
  document.getElementById("hangman").textContent = `Fail: ${wrongGuesses}`;
}

function startGame() {
  word = words[Math.floor(Math.random() * words.length)];
  guessed = [];
  wrongGuesses = 0;
  document.querySelectorAll(".word button").forEach((btn) => {
    btn.disabled = false;
  });
  displayWord();
  updateStatus();
  imgChange();
}

startBtn.addEventListener("click", startGame);


document.querySelectorAll(".word button").forEach((btn) => {
  btn.addEventListener("click", function () {
    const letter = this.textContent;
    this.disabled = true;
    if (word.includes(letter)) {
      guessed.push(letter);
    } else {
      wrongGuesses++;
      updateStatus();
      imgChange();
    }
    displayWord();
    if (!document.getElementById("display-word").textContent.includes("_")) {
      document.createElement
      (`Win "${word}"`);
      startGame();
    }
    if (wrongGuesses === 7) {
      alert(`Буруу байна "${word}"`);
      startGame();
    }
  });
});
