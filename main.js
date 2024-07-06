let userscore = 0;
let compscore = 0;
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector(".user-score");
const compscorepara = document.querySelector(".comp-score");

const gencompchoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randinx = Math.floor(Math.random() * 3); 
    return options[randinx];
}
const drawgame = () =>{
    msg.innerText = "game was draw play again!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win!");
        msg.innerText = `you win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playgame = (userchoice) =>{
    const compchoice = gencompchoice();
    if(userchoice === compchoice){
          drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        } else{
           userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};
choice.forEach((choice) =>{
choice.addEventListener("click", () =>{
   const userchoice = choice.getAttribute("id") ;
  playgame(userchoice);
});
});