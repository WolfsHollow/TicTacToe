const gameboardReset = () =>{
    let gameboard = [];
    for (i = 0; i < 9; i++){
        gameboard.push(null);
    }
    return gameboard;
}

function createBoard(){
    const page = document.getElementById('page');
    const gameboardWrapper = document.querySelector('#gridWrapper');
    let box = [];
    for (i = 0; i < 9; i++){
        box[i] = document.createElement('div');
        box[i].setAttribute('class', 'box');
        box[i].value = i;
        box[i].addEventListener('click', (e)=>{console.log(e.target.value)});
        gameboardWrapper.appendChild(box[i]);
    }

    box[1].setAttribute('class', 'border');
    box[1].style.borderTop = 0;
    box[1].style.borderBottom = 0;

    box[3].setAttribute('class', 'border');
    box[3].style.borderLeft = 0;
    box[3].style.borderRight = 0;


    box[4].setAttribute('class', 'border');
    box[5].setAttribute('class', 'border');
    box[5].style.borderLeft = 0;
    box[5].style.borderRight = 0;

    box[7].setAttribute('class', 'border');
    box[7].style.borderTop = 0;
    box[7].style.borderBottom = 0;
}

function gameBoard(player){
    return {

    }
}

createBoard();

