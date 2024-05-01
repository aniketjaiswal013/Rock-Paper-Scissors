let userScore=0;
let compScore=0;

const reset=document.querySelector("#restart");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const rendInd=Math.floor(Math.random()*3);
    return option[rendInd];
}
const drawGame=()=>{
   console.log("game draw");
   msg.innerText="Game was Draw.Play again.";
  msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice} `;
  msg.style.backgroundColor="green";
    }
    else{
      compScore++;
      compScorePara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
  msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
console.log("User choice =",userChoice);
const compChoice=genCompChoice();
console.log("com choice =",compChoice);

if(userChoice === compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        // com may be-->paper,scissors
        userWin= compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        // com may be-->rock,scissors
        userWin= compChoice==="rock"?true:false;
    }
    else{
        // com may be-->paper,rock
        userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);

}

}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})
reset.addEventListener('click',()=>{
    userScore=0;
    compScore=0;
    userScorePara.innerText=userScore;
    compScorePara.innerText=compScore;
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="black";
})