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
    const linha = shipPositions[i][0];
    const coluna = shipPositions[i][1];
    initialBoard[linha][coluna] = "S";
  }
  return initialBoard;
}

function checkGuesses(guesses, mountedBoard) {
  for (let j = 0; j < guesses.length; j++) {
    const linha = guesses[j][0];
    const coluna = guesses[j][1];
    if (mountedBoard[linha][coluna] === "S") {
      mountedBoard[linha][coluna] = "X";
    }
  }
  return mountedBoard;
}

function checkWinCondition(guessedBoard) {
  for (let k = 0; k < guessedBoard.length; k++) {
    for (let l = 0; l < guessedBoard[k].length; l++)
      if (guessedBoard[k][l] === "S") {
        return false;
      }
    }
    return true;
}
