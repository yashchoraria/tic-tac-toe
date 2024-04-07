const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const newgamebtn = document.querySelector(".btn");


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
    boxes.forEach((box, index) => {
        box.innerHTML = "";
    })
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

}

newgamebtn.addEventListener("click", init)