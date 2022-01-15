const btn = document.getElementById("btn");
const intro = document.getElementById("intro");
const Switch = document.getElementById("switch");
const inGame = document.getElementById("inGame");

let audio = new Audio("./Sound/one.mp3");

btn.addEventListener("click",_=>{
    toggle(intro,inGame);
});

function toggle(x,y){
    x.classList.toggle("d-none");
    y.classList.toggle("d-none");
}

Switch.addEventListener("click",e=>{
    if (e.target.checked){
        audio.play();
        audio.loop
    }
    else {
        audio.pause()
    }

});

/*for Game*/

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const ComputerLife = document.getElementById("ComputerLife");
const playerLife = document.getElementById("playerLife");
const GameOver = document.getElementById("gameOver");
const GameOverShower = document.getElementById("GameOverShower");
/*Variable*/

let tool = [rock,paper,scissor];

tool.map(e => {
    e.addEventListener('click',e=>{
        firstError(e,player);
        forComputer();
        game();
        gameOver(playerLife,ComputerLife);
    })
})

/*for Player*/
function forPlayer(x,y) {
    x.src = y.target.src;
    x.id = y.target.id;
}

/*playerError*/

function firstError(x,y){
    if (x.target.src === undefined){
        y.src = x.target.firstChild.nextSibling.src;
        y.id = x.target.firstChild.nextSibling.id;
    }
    else {
        forPlayer(y,x)
    }
}

/*for computer*/

function forComputer(){
    let randomNum = Math.floor(Math.random() * 3)
    tool.forEach(e => {
        if (e.value == randomNum){
            computer.src = e.firstChild.nextSibling.src;
            computer.id = e.firstChild.nextSibling.id;
        }
    });
}

/*game system*/

function game() {
    let x = Number(player.id);
    let y = Number(computer.id);

    mainGameSystem(x,y);

}

function mainGameSystem(x,y) {
    if((x == 2 && y == 0) || (x == 0 && y ==2) ){/*for rock and scissors*/
        if (x > y){
            playerLife.removeChild(playerLife.lastElementChild);
        }
        else if(x < y){
            ComputerLife.removeChild(ComputerLife.lastElementChild);
        }
    }
    else if (x == y){/*for same*/
        console.log("Ok par");
    }
    else if(x > y){/*for normal flow*/
        ComputerLife.removeChild(ComputerLife.lastElementChild);
        console.log("hello");
    }
    else {
        playerLife.removeChild(playerLife.lastElementChild);
    }
}

/*for gameOver*/
function gameOver(x,y){
    if (x.children.length == 1 || y.children.length == 1){
        inGame.classList.toggle("d-none")
        GameOverShower.classList.toggle("d-none");
        if (x.children.length == 1){
            GameOver.innerText = "you lose";
        }
        else if(y.children.length == 1){
            GameOver.innerText = "You Win";
        }
        setTimeout(handler,5000)
    }
}

function handler() {
    location.reload()
}

