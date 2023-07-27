//score
let playerScore = 0;
let computerScore = 0;
const startButton = document.querySelector("button.menu");
const mainMenu = document.querySelector(".main-menu");
const scoreSection = document.querySelector(".score");
const buttonSection = document.querySelector(".buttonSelection")
const playerSection = document.querySelector(".playerSide")
const comSection = document.querySelector(".computerSide");

const score_p = document.createElement("h2");
score_p.innerText = `${playerScore}`
const score_c = document.createElement("h2");
score_c.innerText = `${computerScore}`
const playerPic = document.createElement("img")

playerPic.classList.toggle("playerhand")
const comPic = document.createElement("img");

comPic.classList.toggle("comhand")

const playerSci = document.createElement("button");
const iconS = document.createElement("img")
iconS.setAttribute("src", "images/icon_scissors.png")
playerSci.classList.add("UI")
playerSci.setAttribute("id", "scissors")

const playerPaper = document.createElement("button");
const iconP = document.createElement("img")
iconP.setAttribute("src", "images/icon_paper.png")
playerPaper.classList.add("UI")
playerPaper.setAttribute("id", "paper")

const playerRock = document.createElement("button");
const iconR = document.createElement("img")
iconR.setAttribute("src", "images/icon_rock.png")
playerRock.classList.add("UI");
playerRock.setAttribute("id", "rock")

const tryAgainB = document.createElement("button") 
tryAgainB.innerText = "Try Again?"
tryAgainB.classList.add("tryAgainButton")
const body = document.querySelector("body");

startButton.addEventListener("click" , () => {
    mainMenu.classList.add("disappear")
    startButton.remove()
    mainMenu.addEventListener("animationend", () => {
        mainMenu.remove();
        loadGameUi();
    })
    
})

function loadGameUi() {
    /*score*/
    scoreSection.appendChild(score_p)
    scoreSection.appendChild(score_c)
    /*Hand Pics*/
    playerPic.setAttribute("src", "/images/PlayerRock.png")
    playerSection.appendChild(playerPic)
    comPic.setAttribute("src", "/images/Com_rock.png")
    comSection.appendChild(comPic)
    /*buttons*/  
    spawnButtons()
}  

function spawnButtons() {
    buttonSection.appendChild(playerSci)
    playerSci.appendChild(iconS)
    buttonSection.appendChild(playerPaper)
    playerPaper.appendChild(iconP)
    buttonSection.appendChild(playerRock);
    playerRock.appendChild(iconR)
}



/*--------------------------------------------------------*/
let source;
let sourceE;
playerSci.addEventListener("click", () => {
    sourceE = startGame("scissors")
    source = "images/PlayerScissor.png"
})
playerPaper.addEventListener("click", () => {
    sourceE = startGame("paper")
    source = "images/PlayerPaper.png"
})
playerRock.addEventListener("click", () => {
    sourceE = startGame("rock")
    source = "images/PlayerRock.png"
})
playerPic.addEventListener("animationend", () => {
    score_p.innerText = `${playerScore}`
    score_c.innerText = `${computerScore}`
    playerPic.classList.toggle("playerAnim")
    playerPic.setAttribute("src", source)
    comPic.setAttribute("src", sourceE)
    comPic.classList.toggle("comAnim")
    spawnButtons();
    scoreCheck();
})

tryAgainB.addEventListener("click", () => {
    tryAgainB.remove()
    buttonSection.innerText = "";
    playerScore = 0;
    computerScore = 0;
    score_p.innerText = `${playerScore}`
    score_c.innerText = `${computerScore}`
    loadGameUi();

})

function scoreCheck() {
    if (computerScore < playerScore && playerScore === 5) {
        buttonSection.innerHTML = "<h1>You Win<h1>"
        buttonSection.setAttribute("style", "color: white")
        generateTryAgain()
    } else if (computerScore > playerScore && computerScore === 5){
        buttonSection.innerHTML = "<h1>You Lose<h1>"
        buttonSection.setAttribute("style", "color: white")
        generateTryAgain()
        //alert("you lose:(")
    }
}
function generateTryAgain() {
    body.appendChild(tryAgainB);
}

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
function startGame(playerS) {
    //ask user for input
    buttonSection.innerHTML = "";
    playerPic.classList.toggle("playerAnim")
    playerPic.setAttribute("src", "images/PlayerRock.png")
    comPic.setAttribute("src", "images/Com_rock.png")
    comPic.classList.toggle("comAnim")
    let player = playerS;
    console.log(playerS)
    let computer = computerTurn();

    if (
        (computer === "rock" && player === "paper") ||
        (player === "scissors" && computer === "paper") ||
        (player === "rock" && computer === "scissors")
    ) {
        ++playerScore
        console.log("playerscore")
        return `images/Com_${computer}.png`
        //alert(`Player: ${playerScore}, Computer: ${computerScore}`)
    } else if (
        (computer === "paper" && player === "rock") ||
        (player === "paper" && computer === "scissors") ||
        (player === "scissors" && computer === "rock")
    ) {
        ++computerScore
        console.log("computerscore")
        return `images/Com_${computer}.png`
        //alert(`Player: ${playerScore}, Computer: ${computerScore}`)
    } else if (
        (computer === "paper" && player === "paper") ||
        (player === "scissors" && computer === "scissors") ||
        (player === "rock" && computer === "rock")
    ) {
        console.log("tie")
        return `images/Com_${computer}.png`
        //alert(`Tie|Player: ${playerScore}, Computer: ${computerScore}`)
    } else {
        //alert("spelling wrong or input is invalid")
    }
}
//the game starts here



/*if(confirm("Try Again?")) { 
    playerScore = 0;
    computerScore = 0;
    startGame()
}*/ 