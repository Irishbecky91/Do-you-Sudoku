// Load the game grids manually - Future developments may include randomly generated boards.
const easy = [
  "---26-7-168--7--9-19---45--82-1---4---46-29---5---3-28--93---74-4--5--367-3-18---",
  "435269781682571493197834562826195347374682915951743628519326874248957136763418259"
];

const medium = [
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
let timer;  // The timer shown in the stats div
let timeLeft;  // The remaining time within the timer
let lives;  // The remaining lives shown in the stats div
let selectedNumber;  // The number selected within the number-selector div
let selectedSquare;  // The square selected within the grid div
let noSelect;  // This disables the selection of the selectedNumber and selectedSquare


// This only allows the code to run when window is fully loaded
window.onload = function (){
  // Run the startgame function when the Start New Game button is clicked
  id("start-game-btn").addEventListener("click", startNewGame);
  // Add addEventListener to each square and number selector
  for (let i = 0; i < id("number-selector").children.length; i++) {
    id("number-selector").children[i].addEventListener("click", function() {
      // If number selection is not disabled
      if (!noSelect) {
        // If the number is already selected
        if (this.classList.contains("selected")) {
          // Deselect the selected number 
          this.classList.remove("selected");
          selectedNumber = null;
        } else {
          // Deselect all other selected numbers 
          for (let i = 0; i < id("number-selector").children.length; i++) {
            id("number-selector").children[i].classList.remove("selected");
          }
          // Select number and update selectedNumber variable
          this.classList.add("selected");
          selectedNumber = this;
          updateSquare();
        }
      }
    });
  }
};


// This function starts a new game with the users chosen settings (Timer, Difficulty and Theme)
function startNewGame() {
  // Select game board difficulty
  let grid;
  if (id("easy-diff").checked) {
    grid = easy[0];
  } else if (id("medium-diff").checked) {
    grid = medium[0];
  } else if (id("hard-diff").checked) {
    grid = hard[0];
  } else if (id("hardcore-diff").checked)
   {
    grid = hardcore[0];
  }
  // Set number of lives to five and enable selection of squares and numbers
  lives = 5;
  noSelect = false;
  id("lives").textContent = "Remaining Lives: 5";
  // Create game board based on difficulty
  createGrid(grid);
  // Start the timer
  startTimer();
  // Assigns theme based on select
  if (id("theme-1").checked){
    // Remove unwanted themes from list and adds light theme
    // Body
    qs("body").classList.remove("dark");
    qs("body").classList.remove("coffee");
    qs("body").classList.remove("unicorn");
    qs("body").classList.add("light");
    // Header
    qs("header").classList.remove("dark");
    qs("header").classList.remove("coffee");
    qs("header").classList.remove("unicorn");
    qs("header").classList.add("light");
    // Footer
    qs("footer").classList.remove("dark");
    qs("footer").classList.remove("coffee");
    qs("footer").classList.remove("unicorn");
    qs("footer").classList.add("light");
  } else if (id("theme-2").checked) {
    // Remove unwanted themes from list and adds dark theme
    // Body
    qs("body").classList.remove("light");
    qs("body").classList.remove("coffee");
    qs("body").classList.remove("unicorn");
    qs("body").classList.add("dark");
    // Header
    qs("header").classList.remove("light");
    qs("header").classList.remove("coffee");
    qs("header").classList.remove("unicorn");
    qs("header").classList.add("dark");
    // Footer
    qs("footer").classList.remove("light");
    qs("footer").classList.remove("coffee");
    qs("footer").classList.remove("unicorn");
    qs("footer").classList.add("dark");
  } else if (id("theme-3").checked) {
    // Remove unwanted themes from list and adds coffee theme
    // Body
    qs("body").classList.remove("light");
    qs("body").classList.remove("dark");
    qs("body").classList.remove("unicorn");
    qs("body").classList.add("coffee");
    // Header
    qs("header").classList.remove("light");
    qs("header").classList.remove("dark");
    qs("header").classList.remove("unicorn");
    qs("header").classList.add("coffee");
    // Footer
    qs("footer").classList.remove("light");
    qs("footer").classList.remove("dark");
    qs("footer").classList.remove("unicorn");
    qs("footer").classList.add("coffee");
  } else if (id("theme-4").checked) {
// Remove unwanted themes from list and adds unicorn theme
    // Body
    qs("body").classList.remove("light");
    qs("body").classList.remove("dark");
    qs("body").classList.remove("coffee");
    qs("body").classList.add("unicorn");
    // Header
    qs("header").classList.remove("light");
    qs("header").classList.remove("dark");
    qs("header").classList.remove("coffee");
    qs("header").classList.add("unicorn");
    // Footer
    qs("footer").classList.remove("light");
    qs("footer").classList.remove("dark");
    qs("footer").classList.remove("coffee");
    qs("footer").classList.add("unicorn");
  }
  // Show the number selector
  id("number-selector").classList.remove("hidden");
}


// This function starts the game timer with the selected time duration
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
  }, 1000); // function runs every 1000 ms
}


// This function converts the time to a format of mm:ss as a string
function timeConvert(time) {
  // Define minutes as 60 seconds or less
  let minutes = Math.floor(time / 60);
  // Display "0" infront of number of minutes if minutes is less than 10
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // Define seconds as remainder of 60 seconds
  let seconds = time % 60;
  // Display "0" infront of number of seconds if seconds is less than 10
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}


// This function creates the game board for the game
function createGrid(grid) {
  // The game board and all variables are cleared
  clearPrevGrid();
  // Increment the ids of the squares as they are created
  let idNumber = 0;
  // This creates 81 squares to fill the 9x9 grid of the game board
  for (let i = 0; i < 81; i++) {
    // This creates a new paragraph element
    let square = document.createElement("p");
    // Checks the pre-defined game boards based on difficulty, to see if the squares should have numbers or be empty
    if (grid.charAt(i) != "-") {
      // Assign the correct number to the squares
      square.textContent = grid.charAt(i);
    } else {
      // Add event listener to each blank square
      square.addEventListener("click", function() {
        // If noSelect is not disabled
        if (!noSelect) {
          // If the square is already selected
          if (square.classList.contains("selected")) {
            // Deselect the square selected
            square.classList.remove("selected");
            selectedSquare = null;
          } else {
            // Deselect all other squares selected
            for (let i = 0; i < 81; i++) {
              qsa(".square")[i].classList.remove("selected");
            }
            // Select square and update selectedSquare variable
            square.classList.add("selected");
            selectedSquare = square;
            updateSquare();
          }
        }
      });
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


// This function assigns the chosen number to a square if correct, or removes a life if incorrect
function updateSquare() {
  // If a square and a number are both selected
  if (selectedSquare && selectedNumber) {
    // Assign the chosen number to the chosen square
    selectedSquare.textContent = selectedNumber.textContent;
    // If the number matches the number in the solution key
    if (checkIfCorrect(selectedSquare)){
      // Deselect the selected square and number selector
      selectedSquare.classList.remove("selected");
      selectedNumber.classList.remove("selected");
      // Clear any selected variables
      selectedNumber = null;
      selectedSquare = null;
      // Check if the game board is completed
      if (checkGridComplete()) {
        gameOver();

      }
    } else { // Check if the number does not match the solution key
      // Disallow selecting new numbers for half a second
      noSelect = true;
      // Turn the selected square dark with red text 
      selectedSquare.classList.add("incorrect");
      // Run after half a second
      setTimeout(function() {
        // Take 1 from lives
        lives --;
        // If user runs out of lives
        if (lives === 0) {
          gameOver();
        } else { // If there are lives remaining
          // Update the remaining lives section with current lives
          id("lives").textContent = "Remaining Lives: " + lives;
          // Allow number and square selection
          noSelect = false;
        }
        // Restore square and number color and remove selected from both
        selectedSquare.classList.remove("incorrect");
        selectedSquare.classList.remove("selected");
        selectedNumber.classList.remove("selected");
        // Clear the text in tiles and selected variables
        selectedSquare.textContent = "";
        selectedSquare = null;
        selectedNumber = null;
      }, 500);
    }
  }
}


// This function checks if every square of the game board is filled, meaning the user has won
function checkGridComplete() {
  // Make an array of all squares in the grid to look through
  let squares = qsa(".square");
  // Make an empty array to store empty squares in
  let emptySquares = [];
  for (let i = 0; i < squares.length; i++) {
    // Define a variable to show the content of the squares within the squares array
    let squareContent = squares[i].textContent;
    // If the sqaure's content is an empty string
    if (squareContent === "") {
      // All empty squares are pushed onto the emptySquares array
      emptySquares.push(squareContent);
    }
  }
  // If the array is empty, the game is won. Else the game continues
  if (emptySquares.length === 0) {
    return true;
  } else {
    return false;
  }
}


// Check if a number/square pair is correct when compared to the solution
function checkIfCorrect(square) {
  // Assign the solution based on the difficulty setting chosen
  let solution;
  if (id("easy-diff").checked) {
    solution = easy[1];
  } else if (id("medium-diff").checked) {
    solution = medium[1];
  } else if (id("hard-diff").checked) {
    solution = hard[1];
  } else {
    solution = hardcore[1];
  }
  // If square's number matches the solution number
  if (solution.charAt(square.id) === square.textContent) {
    return true;  
  } else {
    return false;
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
  if (timer) {
    clearTimeout(timer);
  }
  // Deselect any numbers still selected
  for (let i = 0; i < id("number-selector").children.length; i++) {
    id("number-selector").children[i].classList.remove("selected");
  }
  // Clear all selected variables
  selectedNumber = null;
  selectedSquare = null;
}


// This function ends the game
function gameOver() {
  // Disables any further moves and stops the timer
  noSelect = true;
  clearTimeout(timer);
  // Display a win or loss message
  if (lives === 0 || timeLeft === 0) {
    id("lives").textContent = "Uh oh! You lost! Want to try again?";
  } else {
    id("lives").textContent = "Woohoo! You won! Want to try again?";
  }
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