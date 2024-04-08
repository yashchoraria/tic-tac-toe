const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const newgamebtn = document.querySelector(".btn");
const maingame = document.querySelector(".tic-tac-toe");
const gameOverPopup = document.querySelector(".game-over-display");

let answer = "";
let currentplayer;
let gamegrid;

const winningpos = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

function removingcolor(){
    winningpos.forEach((position)=>{
        boxes[position[0]].classList.remove("win");
        boxes[position[1]].classList.remove("win");
        boxes[position[2]].classList.remove("win");
    })
}

init();
function init(){
    currentplayer = "X";
    gamegrid = ["","","","","","","","",""];
    boxes.forEach((box, index) => {
        box.innerHTML = "";
        boxes[index].style.pointerEvents = "all";
        })
    newgamebtn.classList.remove("active");
    gameinfo.innerText = `Current Player - ${currentplayer}`;
    removingcolor();
    maingame.classList.remove("hidden");
    gameOverPopup.classList.remove("active");
}

boxes.forEach((box, index) =>{
    box.addEventListener("click", ()=>{
        handleclick(index);
    })
})

function handleclick(index){
    if(gamegrid[index] === ""){
        boxes[index].innerHTML = currentplayer;
        gamegrid[index] = currentplayer; 
        boxes[index].style.pointerEvents = "none";
        swapturn();
        checkgameover();
    }
}

function swapturn(){
    if(currentplayer ===  "X"){
        currentplayer = "O";
    }
    else{
        currentplayer = "X";
    }
    gameinfo.innerText = `Current Player - ${currentplayer}`;
}

function checkgameover(){
    answer = "";
    winningpos.forEach((position) => {
        if((gamegrid[position[0]] !== "" || gamegrid[position[1]] !== "" || gamegrid[position[2]] !== "" ) &&
        (gamegrid[position[0]] === gamegrid[position[1]]) && (gamegrid[position[1]] === gamegrid[position[2]])){
            if(gamegrid[position[0]] === "X"){
                answer = "X";
            }
            else{
                answer = "O";
            }

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
    });

    if(answer!==""){
        newgamebtn.classList.add("active");
        gameover();
    }
}   

function gameover(){
    maingame.classList.add("hidden");
    gameOverPopup.classList.add("active");
    const winnerText = document.querySelector(".game-over-display p.winner");
    winnerText.innerText = `Player ${answer} wins`;
    const restartBtn = document.querySelector(".game-over-display.restart");
    restartBtn.addEventListener("click", init);
}


newgamebtn.addEventListener("click", init);