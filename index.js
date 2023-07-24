//score
let playerScore = 0;
let computerScore = 0;
//random nnumber from 1-3
function random(numbers) {
    return numbers[Math.floor(Math.random()*numbers.length)];
}
//a function that the computer will run to select a move 
function computerTurn() {
    let computerSelect = random([1,2,3]);
   
    if (computerSelect === 1) {
        return "rock";
    } else if (computerSelect === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
function startGame() {
    while (playerScore != 5 && computerScore != 5) {
        //ask user for input
        //convert it to lower case string
        let player = prompt(`Rock, Paper or scissors, Rock| Player: ${playerScore} Computer: ${computerScore}`).toLowerCase();
        let computer = computerTurn();
    

        if (
            (computer === "rock" && player === "paper") ||
            (player === "scissors" && computer === "paper") ||
            (player === "rock" && computer === "scissors")
        ) {
            ++playerScore;
            alert(`Player: ${playerScore}, Computer: ${computerScore}`)
        } else if (
            (computer === "paper" && player === "rock") ||
            (player === "paper" && computer === "scissors") ||
            (player === "scissors" && computer === "rock")
        ) {
            ++computerScore;
            alert(`Player: ${playerScore}, Computer: ${computerScore}`)
        } else if (
            (computer === "paper" && player === "paper") ||
            (player === "scissors" && computer === "scissors") ||
            (player === "rock" && computer === "rock")
        ) {
            alert(`Tie|Player: ${playerScore}, Computer: ${computerScore}`)
        } else {
            alert("spelling wrong or input is invalid")
        }
    }
}
//the game starts here
startGame()
if (computerScore < playerScore) {
    alert("You Win")
} else {
    alert("you lose:(")
}

if(confirm("Try Again?")) { 
    playerScore = 0;
    computerScore = 0;
    startGame()
} 