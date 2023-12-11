let boxes = document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset_btn")
let newgamebtn=document.querySelector("#newgame")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO=true;
let count=0;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,7],
    [6,7,8],

];






boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
            
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled= true;
        count++;

        let isWinner = checkwinner();
        if(count==9 & !isWinner){
            gameDraw()
        }
    });
});



const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    
    }
}

const resetgame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

const gameDraw =()=>{
    msg.innerText="Game Was a Draw";
    msgcontainer.classList.remove("hide");
    disablebox()
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner =(winner) =>{
    msg.innerHTML=`congractulations,winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disablebox();

}



const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    
       if (pos1val !="",pos2val !="", pos3val !=""){
        if(pos1val === pos2val && pos2val === pos3val){
            
            showWinner(pos1val);
        }
      }
    }

}

newgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)





































