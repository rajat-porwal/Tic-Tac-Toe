const displayDiv = document.getElementById('gameBoard');

function clearDisplay(){
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(`cell-${i}`);
        cell.textContent = '';
    }
}

function convertTo2D(array, numRows, numCols) {
    const array2D = [];
    let index = 0;
  
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        row.push(array[index]);
        index++;
      }
      array2D.push(row);
    }
  
    return array2D;
  }

 function columnValuesAreSame(array) {
    // Get the first value in the column
    for(let j=0; j<3; j++){
        const firstValue = array[0][j];
        for (let i = 1; i < array.length; i++) {
            // Compare the value at the specified column index to the first value
            if (array[i][j] !== firstValue) {
                break;
            }
            if(i === array.length -1){
                return true
            }
        }  
    }
    return false;
}

function rowValuesAreSame(row) {
    for (let i = 1; i < row.length; i++) {
        if (row[i] !== row[0]) {
            return false;
        }
    }
    return true;
}

function gameWinCheckTrigger(fixedArray) {
    let nonNullOrElementsCount = 0;
    fixedArray.forEach(element => {
        if (element !== null) {
            nonNullOrElementsCount++;
        }
    });
    if (nonNullOrElementsCount > 4) {
        return true
        // Perform the desired action here
    }
}

const gameBoardObject = (function(){
   const gameBoard = new Array(9);
    return gameBoard;
})();

function createPlayer(name){
    return {name};
}

function renderGameBoard(gameBoard) {
    for (let i = 0; i < 9; i++) {
       
        const cell = document.getElementById(`cell-${i}`);
        cell.textContent = gameBoard[i];
        
    }
}

function clickGame(gameBoard){
    let flag =0;
    for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(`cell-${i}`);
        cell.addEventListener('click',() => {
            if(flag === 0){
                cell.textContent = '0';
                flag = 1;
            }else{
                cell.textContent = 'X';
                flag = 0;
            }
            gameBoard[i] = cell.textContent;
            const gameBoard2D = convertTo2D(gameBoard, 3, 3);
            console.log(gameBoard2D);
            if(gameWinCheckTrigger(gameBoard)){
                for(let k=0; k<3; k++){
                    if(rowValuesAreSame(gameBoard2D[k])){
                        alert('player 1 wins');
                        clearDisplay();
                        break;
                    }
                    else if(columnValuesAreSame(gameBoard2D)){
                        alert('player 1 wins');
                        break;
                    }
                }
            }     
        });   
    }
}


function moveGame(gameBoard){
    for(let i=0;i<9;i++){
        const move1 =   parseInt(prompt("your move player 1"));
        gameBoard[move1] = '0';
        i++;
        const gameBoard2D = convertTo2D(gameBoard, 3, 3);
        renderGameBoard(gameBoard);
        console.log(gameBoard2D);
        if(i>4){
            for(let k=0; k<3; k++){
                if(rowValuesAreSame(gameBoard2D[k])){
                    alert('player 1 wins');
                    i= 9;
                    break;
                }
                else if(columnValuesAreSame(gameBoard2D)){
                    alert('player 1 wins');
                    i= 9;
                    break;
                }
            }
        }
        if(i=== 9){
            break;
        }
        let move2 =   prompt("your move player 2");
        gameBoard[move2] = 'x';
        
        
    }
}

function game() {
    const gameBoard = gameBoardObject;
    const player1 = createPlayer('player1');
    const player2 = createPlayer('player2');
    // moveGame(gameBoard);
    clickGame(gameBoard);
    
    
}

game();