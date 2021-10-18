page = document.getElementById('page');
gridWrapper = document.getElementById('gridWrapper');
let box = [];

let gameGrid = ['','','','','','','','',''];
let playerTurn = 'X';

(function createGrid() {
  for (i=0; i < 9; i++){
    box[i] = document.createElement('div');
    box[i].setAttribute('class', 'box'); 
    box[i].value = i;
    box[i].addEventListener('click', changeColor);    
    gridWrapper.appendChild(box[i]);
  }
})()

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
  checkWin(gameGrid);
  changePlayer();
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
    alert(`${playerTurn} has won!`);
    console
  }
  if (spaceIndex == -1 && winner != true){
     return alertTie();
   }
  console.log(gameGrid);
  
}

function alertTie(){
  alert('its a tie');
}

function Game(){
  playerTurn = 'X';
  let winner = false;
 
}

function changePlayer(){
  if (playerTurn == 'X'){
    playerTurn = 'O';
  }
  else{
    playerTurn = 'X';
  }
}

function computerAI(gameGrid){
  
}