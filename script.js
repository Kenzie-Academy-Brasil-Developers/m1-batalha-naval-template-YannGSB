// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

// 3 funções independentes

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    const row = shipPositions[i][0];
    const column = shipPositions[i][1];
    initialBoard[row][column] = "S";
  }
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (let j = 0; j < guesses.length; j++) {
    const row = guesses[j][0];
    const column = guesses[j][1];
    if (mountedBoard[row][coluna] === "S") {
      mountedBoard[row][column] = "X";
    }
  }
  return mountedBoard;
}

function checkWinCondition(guessedBoard) {
  for (let k = 0; k < guessedBoard.length; k++) {
    for (let l = 0; l < guessedBoard[k].length; l++) {
      if (guessedBoard[k][l] === "S") {
        return false;
      }
    }
  }
  return true;
}
