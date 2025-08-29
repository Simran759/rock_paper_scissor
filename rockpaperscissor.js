let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const move = document.querySelector("#move1");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const compchoice = () => {
    let compchoices = ["rock", "paper", "scissors"];
    let cchoice = Math.floor(Math.random() * 3);
    return compchoices[cchoice];
};

const winscreen = (userchoice, computerchoice) => {
    move.innerText = `You win! ${userchoice} beats ${computerchoice}`;
    move.style.backgroundColor = "green";
};

const losescreen = (userchoice, computerchoice) => {
    move.innerText = `You lose! ${computerchoice} beats your ${userchoice}`;
    move.style.backgroundColor = "red";
};

const drawscreen = () => {
    move.innerText = "It's a draw!";
};

const playgame = (userchoice) => {
    const computerchoice = compchoice();
    if (userchoice === computerchoice) {
        drawscreen();
    } else {
        if (userchoice === "rock") {
            if (computerchoice === "scissor") {
                userscore++;
                user.innerText = userscore;
                winscreen(userchoice, computerchoice);
            } else {
                compscore++;
                comp.innerText = compscore;
                losescreen(userchoice, computerchoice);
            }
        } else if (userchoice === "paper") {
            if (computerchoice === "rock") {
                userscore++;
                user.innerText = userscore;
                winscreen(userchoice, computerchoice);
            } else {
                compscore++;
                comp.innerText = compscore;
                losescreen(userchoice, computerchoice);
            }
        } else if (userchoice === "scissor") {
            if (computerchoice === "paper") {
                userscore++;
                user.innerText = userscore;
                winscreen(userchoice, computerchoice);
            } else {
                compscore++;
                comp.innerText = compscore;
                losescreen(userchoice, computerchoice);
            }
        }
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
