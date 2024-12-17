const you_choice = document.querySelector(".choices .you-choice .images");
const computer_choice = document.querySelector(".choices .computer-choice .images");
const win = document.querySelector(".results .result .win");
const lost = document.querySelector(".results .result .lost");
const draw = document.querySelector(".results .result .draw");
const resetButton = document.querySelector(".buttons .reset");

const images = document.querySelectorAll(".images-container .images img");

const inputArray = ["scissors", "paper", "rock"];

function resetScore() {
    win.textContent = "0";
    lost.textContent = "0";
    draw.textContent = "0";   
    you_choice.textContent = '';
    computer_choice.textContent = '';
}

function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * inputArray.length);
    return inputArray[randomValue];
}

function updateResults(you, computer) {
    let computerWin = false;
    let youWin = false;
    if (computer == you) {
        draw.textContent = Number(draw.textContent) + 1;
    } else if ((you == "scissors" && computer == "rock") || (you == "rock" && computer == "paper") || (you == "paper" && computer == "scissors")) {
        lost.textContent = Number(lost.textContent) + 1;
    } else {
        win.textContent = Number(win.textContent) + 1;
    }
    
}

for (let image of images) {
    image.addEventListener("click", (e) => {
        you_choice.textContent = '';
        computer_choice.textContent = '';
        const inputYou = e.target.id;
        const nodeYouChoiceImg = document.createElement("img");
        nodeYouChoiceImg.src = "../images/" + inputYou + "-emoji.png";
        you_choice.append(nodeYouChoiceImg); 

        const nodeComputerChoiceImg = document.createElement("img");
        const inputComputer = getComputerChoice();
        nodeComputerChoiceImg.src = "../images/" + inputComputer + "-emoji.png";
        computer_choice.append(nodeComputerChoiceImg);

        updateResults(inputYou, inputComputer);
    });
}

resetButton.addEventListener("click", () => {
    resetScore();
});