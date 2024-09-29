let userscore=0;
let comscore=0;
const choicesbox=document.querySelectorAll(".choices");
const msg=document.querySelector("#msgtext");
const userscorepara = document.querySelector("#userscore");
const comscorepara = document.querySelector("#comscore");


const gencomputerchoice=()=>{
    const option=["paper","rock","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
}

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="the game was draw . Play again";
    msg.style.backgroundColor = "black";
}


const showwinner=(userwin,userchoice,comchoice)=>{
    if(userwin){
        console.log("you win !");
        msg.innerText=`you win ! ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText= userscore;

    }
    else{
        console.log("you lose");
        msg.innerText=`you lose. ${comchoice}  beats ${userchoice}`;
       msg.style.backgroundColor = "red";
       comscore++;
       comscorepara.innerText = comscore;
    }
}

const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    //computer choices
    const comchoice=gencomputerchoice();
    console.log("computer choise is =",comchoice);
    if(userchoice===comchoice){
        //draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
           userwin= comchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper"){
           userwin= comchoice==="scissor" ? false: true; 
        }
        else{
            userwin= comchoice==="rock" ? false: true;
        }
        showwinner(userwin,userchoice,comchoice);
    }
};




choicesbox.forEach((choices)=>{
    
    choices.addEventListener("click",()=>{
        const userchoice=choices.getAttribute("id")
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    })
})