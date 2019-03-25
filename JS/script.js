let userScore = 0;
let computerScore = 0;

//user-computer score
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

//result
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");


//rock, paper, scissors
const rock_div = document.getElementById("ro");
const paper_div = document.getElementById("pa");
const scissors_div = document.getElementById("sc");

//random computer choice
function getComputerChoice() {
    const choices = ['ro', 'pa', 'sc'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(leter) {
    if (leter === "ro") return "Rock";
    if (leter === "pa") return "Paper";
    if (leter === "sc") return "Scissors";
}

//win
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const resultColor = "You win!".fontcolor("black").fontsize(6);
    const winColor = "beats".fontcolor("wheat");
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} &nbsp ${winColor} &nbsp ${convertToWord(computerChoice)}${smallComputerWord} <br> ${resultColor}`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

//lost
function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const resultColor = "You lost!".fontcolor("black").fontsize(6);
    const loseColor = "lose to".fontcolor("wheat");
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} &nbsp ${loseColor} &nbsp ${convertToWord(computerChoice)}${smallComputerWord}<br> ${resultColor}`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

//draw
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "computer".fontsize(3).sub();
    const resultColor = "It's a draw".fontcolor("black").fontsize(6);
    const drawColor = "equals".fontcolor("wheat");
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} &nbsp ${drawColor} &nbsp ${convertToWord(computerChoice)}${smallComputerWord}<br> ${resultColor}`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rosc":
        case "paro":
        case "scpa":
            win(userChoice, computerChoice);
            break;
        case "ropa":
        case "pasc":
        case "scro":
            lose(userChoice, computerChoice);
            break;
        case "roro":
        case "papa":
        case "scsc":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {

    rock_div.addEventListener('click', () => game("ro"));
    paper_div.addEventListener('click', () => game("pa"));
    scissors_div.addEventListener('click', () => game("sc"));
}

main();

function restart() {
    location.reload();
}
