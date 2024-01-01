let userScore = 0;
let compScore = 0;


// Access the class
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


// Function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};



// Function to display the winner or loser message
const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    
    }
};


// Function to handle a draw game
const drawGame = () => {
    // console.log("Game was draw.");
    msg.innerText = "Game was draw. Please try again!";
    msg.style.backgroundColor = "#081b31";
  
    
};



// Function to play the game based on user's choice
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        // Check win/lose conditions based on user and computer choices
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "rock" ? false : true;
        } else {
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};



// Add click event listeners to each choice element
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
