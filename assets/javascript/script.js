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
};


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
  // Start the timer
  startTimer();
  // Assigns theme based on select
  if (id("theme-1").checked){
    qs("body", "header", "footer").classList.remove("dark");
    qs("body", "header", "footer").classList.remove("tech");
    qs("body", "header", "footer").classList.remove("unicorn");
    qs("body", "header", "footer").classList.add("light");
  } else if (id("theme-2").checked) {
    qs("body", "header", "footer").classList.remove("light");
    qs("body", "header", "footer").classList.remove("tech");
    qs("body", "header", "footer").classList.remove("unicorn");
    qs("body", "header", "footer").classList.add("dark");
  } else if (id("theme-3").checked) {
    qs("body", "header", "footer").classList.remove("light");
    qs("body", "header", "footer").classList.remove("dark");
    qs("body", "header", "footer").classList.remove("unicorn");
    qs("body", "header", "footer").classList.add("tech");
  } else if (id("theme-4").checked) {
    qs("body", "header", "footer").classList.remove("light");
    qs("body", "header", "footer").classList.remove("dark");
    qs("body", "header", "footer").classList.remove("tech");
    qs("body", "header", "footer").classList.add("unicorn");
  }
};

function startTimer() {
  // Set time remaining based on selection
  if (id("time-3").checked) {
    timeLeft = 180;
  } else if (id("time-5").checked) {
    timeLeft = 300;
  } else {
    timeLeft = 600;
  }
  // Set the timer for first second
  id("timer").textContent = timeConvert(timeLeft);
  // Timer to update every second
  timer = setInterval(function() {
    timeLeft --;
    // If time runs out, end the game
    if (timeLeft === 0) {
      gameOver();
    }
    id("timer").textContent = timeConvert(timeLeft);
  }, 1000)
}


// This function creates the board
function createGrid(grid) {
  // The game board and all variables are cleared
  clearPrevGrid();
  // Increment the ids of the squares as they are created
  let idNumber = 0;
  // This creates 81 squares to fill the 9x9 grid of the game board
  for (let i = 0; i < 81; i++) {
    // This creates a new paragraph element
    let square = document.createElement("div");
    // Checks the pre-defined game boards based on difficulty, to see if the squares should have numbers or be empty
    if (grid.charAt(i) != "-") {
      // Assign the correct number to the squares
      square.textContent = grid.charAt(i);
    } else {
      // Add event listener to each blank square
    }
    // Assign an id to each square
    square.id = idNumber;
    // Increment the id for each square made
    idNumber ++;
    // // Add "square" class to each square created
    square.classList.add("square");
    // Adding in a thicker bottom border on these lines to define the game board sections
    if ((square.id > 17 && square.id < 27) || (square.id > 44 && square.id < 54)) {
      square.classList.add("bottomBorder");
    }
    // Adding in a thicker border on these right of these lines to define the game board sections (Selects the 3rd and 6th square in each row)
    if ((square.id + 1) % 9 == 3 || (square.id + 1) % 9 == 6) {
      square.classList.add("rightBorder");
    }
    // Add square to the game board
    id("grid").appendChild(square);
  }
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
}


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