let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissors");

function getComputerChoice() {

    var choices=["r","p","s"];
    var choice = Math.floor(Math.random()*3);
    return choices[choice];
}

function letterToWord (letter) {
    if (letter==="r") {
        return "Rock";
    } else if (letter==="p") {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function win(userChoice,compChoice) {
    userScore++;
    userScore_span.innerHTML=userScore;
    const smallUserWord = "(User)".fontsize(3).sub();
    const smallCompWord = "(Comp)".fontsize(3).sub();
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} beates ${letterToWord(compChoice)}${smallCompWord}. You Win!`
}

function lose(userChoice,compChoice) {
    compScore++;
    compScore_span.innerHTML=compScore;
    const smallUserWord = "(User)".fontsize(3).sub();
    const smallCompWord = "(Comp)".fontsize(3).sub();
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} looses to ${letterToWord(compChoice)}${smallCompWord}. You Loose...`
}

function draw(userChoice,compChoice) {
    const smallUserWord = "(User)".fontsize(3).sub();
    const smallCompWord = "(Comp)".fontsize(3).sub();
    result_p.innerHTML = `${letterToWord(userChoice)}${smallUserWord} equals ${letterToWord(compChoice)}${smallCompWord}. It's a Draw.`
}

function game(userChoice) {

    var compChoice = getComputerChoice();
    var combination = userChoice + compChoice;

    switch(combination) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,compChoice);
        break;

        case "rp":    
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
        break;

        case "rr":
        case "pp":
        case "ss": 
            draw(userChoice,compChoice);
        break;   
    }
}

function main () {

    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissor_div.addEventListener("click", function() {
        game("s");
    })
}

main();
