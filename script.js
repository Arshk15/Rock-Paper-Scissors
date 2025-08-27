let user = document.querySelector(".user");
let comp = document.querySelector(".comp");
let choices = document.querySelectorAll(".move");
let msgcon = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let userscore = document.querySelector(".num1");
let compscore = document.querySelector(".num2");

let userpts = 0;
let comppts = 0;

const gencompchoice = () =>{
    let list = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random()*3);
    return list[idx];
};

let  showWinner = (userwin,userchoice,compchoice) =>{
    msgcon.classList.remove("win", "lose", "draw");

    if(userwin){
        msg.innerText = `You won!!🎉 Your ${userchoice} beats ${compchoice}`;
        msgcon.classList.add("win");
        userpts++;
        userscore.innerText = userpts;
    }
    else{
        msg.innerText = `Computer won!!🤖 ${userchoice} was lost by ${compchoice}`;
        msgcon.classList.add("lose");
        comppts++;
        compscore.innerText = comppts;
    }
};

let drawgame = () =>{
    msgcon.classList.remove("win", "lose", "draw");

    msg.innerText = "Draw Game!! Play again!!😅";
    msgcon.classList.add("draw");
}

let playgame = (userchoice) =>{
    const compchoice = gencompchoice();

    if(userchoice === compchoice){
        drawgame();
        return;
    }

     let userwin = true;

    if(userchoice === "rock"){
        userwin = compchoice === "paper" ? false : true;
    }
    else if(userchoice === "paper"){
        userwin = compchoice === "rock" ? true : false;
    }
    else{
        userwin = compchoice === "paper" ? true : false;
    }

    showWinner(userwin,userchoice,compchoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});