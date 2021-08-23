// Load the game grids manually - Future developments may include randomly generated boards.
const easy = [
  "---26-7-168--7--9-19---45--82-1---4---46-29---5---3-28--93---74-4--5--367-3-18---",
  "435269781682571493197834562826195347374682915951743628519326874248957136763418259"
];

const intermediate = [
  "-2-6-8---58---97------4----37----5--6-------4--8----13----2------98---36---3-6-9-",
  "123678945584239761967145328372461589691583274458792613836924157219857436745316892"
];

const hard = [
"---6--4--7----36------91-8-----------5-18---3---3-6-45-4-2---6-9-3-------2----1--",
"581672439792843651364591782438957216256184973179326845845219367913768524627435198"
];

const hardcore = [
  "-2----------6----3-74-8---------3--2-8--4--1-6--5---------1-78-5----9----------4-",
  "126437958895621473374985126457193862983246517612578394269314785548769231731852649"
];


// Define Variables
let timer;
let timeLeft;
let lives;
let selectedNumber;
let selectedSquare;
let deselect;


// Only runs code when window is fully loaded
window.onload = function (){
  // Run the startgame function when the Start New Game button is clicked
  id("start-game-btn").addEventListener("click", startNewGame);
}

// This function starts a new game with the users chosen settings
function startNewGame() {
  // Select game board difficulty
  let grid;
  if (id("easy-diff").click) {
    grid = easy[0];
  } else if (id("intermediate-diff").click) {
    grid = intermediate[0];
  } else if (id("hard-diff").click) {
    grid = hard[0];
  } else if (id("hardcore-diff").click) {
    grid = hardcore[0];
  }
  // Set number of lives to five and enable selection of squares and numbers
  lives = 5;
  deselect = false;
  id("lives").textContent = "Remaining Lives: 5";
  // Create game board based on difficulty
  createGrid(grid);
};

// This function creates the board
function createGrid(grid) {
  clearPrevGrid();
}

// This function clears the previously played game board
function clearPrevGrid(){
  // Select all the squares
  let squares = qsa(".square");
  // Remove the contents of all squares
  for (let i = 0; i < squares.length; i++) {
    squares[i].remove();
  }
  // Clear any remaining time on timer
  if (timer) clearTimer(timer);
  // Deselect any numbers still selected
  for (let i = 0; i < id("number-selector").children.length; i++) {
    id("number-selector").children[i].classList.remove("selected");
  }
  // Clear all selected variables
  selectedNumber = null;
  selectedSquare = null;
};


// Helper functions
// This function removes the need to type document.getElementById(); each time an id is called.
function id(id) {
  return document.getElementById(id);
}

// This function removes the need to type document.querySelector(); each time an id is called.
function qs(selector) {
  return document.querySelector(selector);
}

// This function removes the need to type document.querySelectorAll(); each time an id is called.
function qsa(selector) {
  return document.querySelectorAll(selector);
}