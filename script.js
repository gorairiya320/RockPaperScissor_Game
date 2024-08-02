let btns=document.querySelectorAll(".innerBtn");
let List=["rock","paper","scissor"];
let newContainer=document.querySelector(".msg-container");
let newContainer2=document.querySelector(".msg2-container");
let showResult=document.querySelector(".result");
console.log(showResult);
let userChoice="";
let computerChoice="";
let gameStatus="";

btns.forEach((btnText) => {
    btnText.addEventListener("click", () => {
      userChoice=btnText.innerText.trim();
      console.log(userChoice);
      newContainer2.innerText=`You select:-${userChoice}`;
      
      randomChoice();
      checkWinner();
      showWinner();
      
    });
  });

const randomChoice=()=>{
       const randomItem=Math.floor(Math.random()*List.length);
       const randomItems=List[randomItem];
       computerChoice=randomItems;
       console.log(computerChoice);
       
}

const checkWinner=()=>{
    newContainer.innerText=`Computer select:-${computerChoice}`;
    if(userChoice=="rock" && computerChoice=="rock" || userChoice=="paper" && computerChoice=="paper" || userChoice=="scissor" && computerChoice=="scissor"){
        gameStatus="!Game draw!";
    

    }
    else if(userChoice=="rock" && computerChoice=="scissor"|| userChoice=="scissor" && computerChoice=="paper"){
        gameStatus="!Wow,You win the Game!";
    
    }
    else{
        gameStatus="!Ohh No,Computer win the Game!";
    
    }
};

const showWinner=()=>{
    if(gameStatus=="!Game draw!"){
        showResult.style.color="red";
    }
    if(gameStatus=="!Wow,You win the Game!"){
        showResult.style.color="blue";
    }
    if(gameStatus=="!Ohh No,Computer win the Game!"){
        showResult.style.color="green";
    }
    
    showResult.innerText=`${gameStatus}`
}














  