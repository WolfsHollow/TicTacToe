const page = document.getElementById('page');
const gridWrapper = document.getElementById('gridWrapper');
const title = document.getElementById('title');
const restart = document.getElementById('restartButtonBot');
const restartOverlay = document.getElementById('restartButton');
const overlayScreen = document.getElementById('overlayScreen');
const overlayMessage = document.getElementById('overlayMessage')

overlayScreen.onclick = hideOverlay;

restart.onclick = restartGame;
restartOverlay.onclick = restartGame;


let gameGrid = ['','','','','','','','',''];
let playerTurn = 'X';

title.textContent = `It is X's Turn`;
let box = [];

(function createGrid() {
  for (i=0; i < 9; i++){
    box[i] = document.createElement('div');
    box[i].setAttribute('class', 'box'); 
    box[i].value = i;
    box[i].addEventListener('click', changeColor);    
    gridWrapper.appendChild(box[i]);
  }
})()

function hideOverlay(){
  overlayScreen.classList.remove('show');
}

function changeColor(){
  let value = this.value;
  let color = this.style.backgroundColor;
  
  if (playerTurn == 'X'){
      this.style.backgroundColor = 'green';
      this.innerText = playerTurn;  
  }
  else if (playerTurn == 'O'){
       this.style.backgroundColor = 'darkblue';
       this.innerText = playerTurn;
  }
  
  gameGrid[value] = this.innerText;
  let winner = checkWin(gameGrid);
  changePlayer(winner);
}

function checkWin(gameGrid){
  let winner = false;
  if (gameGrid[0] != ''){
      if ((gameGrid[0] == gameGrid[1] && gameGrid[0] == gameGrid[2]) ||
        (gameGrid[0] == gameGrid[4] && gameGrid[0] == gameGrid[8]) ||
        (gameGrid[0] == gameGrid[3] && gameGrid[0] == gameGrid[6]))   
      {
        winner = true;
      }
  }
  
  if (gameGrid[2] != ''){
     if (gameGrid[2] == gameGrid[5] && gameGrid[2] == gameGrid[8]){
          winner = true;
        } 
     else if (gameGrid[2] == gameGrid[4] && gameGrid[2] == gameGrid[6]){
          winner = true;
        }
  }
  
  if (gameGrid[4] != ''){
    if (gameGrid[1] == gameGrid[4] && gameGrid[1] == gameGrid[7]){
        winner = true;
    }
     else if (gameGrid[3] == gameGrid[4] && gameGrid[3] == gameGrid[5]){
        winner = true;
    }
  }  
  if (gameGrid[6] != ''){
      if (gameGrid[6] == gameGrid[7] && gameGrid[6] == gameGrid[8]){
        winner = true;
      }   
  }  
  
  let spaceIndex = gameGrid.indexOf('');
  if (winner==true){
    overlayScreen.classList.add('show');
    overlayMessage.textContent = `${playerTurn} has won!`;
    title.textContent = `${playerTurn} has won!`;
    for (i=0; i < 9; i++){
      box[i].style.cursor = 'not-allowed';
      box[i].removeEventListener('click', changeColor);
    }
  }
  if (spaceIndex == -1 && winner != true){
    alertTie();
    winner = true;
  }
  console.log(gameGrid);
  return winner;
}

function alertTie(){
  overlayScreen.classList.add('show');
  overlayMessage.textContent = `It's a tie!`;
  title.textContent = `It's a Tie!`;
  for (i=0; i < 9; i++){
    box[i].style.cursor = 'not-allowed';
    box[i].removeEventListener('click', changeColor);
  }
}

function Game(){
  playerTurn = 'X';
  let winner = false;
 
}

function changePlayer(winner){
  if (winner) {
    return 
  }
  if (playerTurn == 'X'){
    playerTurn = 'O';

  }
  else{
    playerTurn = 'X';
  }
  title.textContent = `It is ${playerTurn}'s turn`;
}

function restartGame(){
  overlayScreen.classList.remove('show');
  gameGrid = ['','','','','','','','',''];
  playerTurn = 'X';
  title.textContent = "It is X's Turn";
  for (i=0; i < 9; i++){
    box[i].innerText = '';
    box[i].style.backgroundColor = '#EF780E';
    box[i].style.cursor = 'pointer';
    box[i].addEventListener('click', changeColor);
  }
}